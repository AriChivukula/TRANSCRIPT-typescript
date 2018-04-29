#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, sep } from "path";

import { endTemplate, Module, startTemplate } from "./index";

getFiles()
  .forEach(codegenFile);

function getFiles(): string[] {
  const commandIndex: number = process.argv
    .findIndex((elt: string) => /typescriptase/.test(elt));
  if (commandIndex === -1 || process.argv.length === commandIndex + 1) {
    throw new Error("Usage is `typescriptase GLOB`");
  }

  return process.argv.slice(commandIndex + 1);
}

function codegenFile(path: string): void {
  // tslint:disable-next-line
  let file: { [index: string]: any };
  try {
    // tslint:disable-next-line
    file = require(`${process.cwd()}/${path}`);
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);

    return;
  }
  for (const name in file) {
    if (file[name] instanceof Module) {
      // tslint:disable-next-line
      codegenModule(file[name], path, name);
    }
  }
}

function codegenModule(module: Module, path: string, name: string): void {
  let dirBuilder: string = "";
  dirname(module.destination())
    .split(sep)
    .forEach((dirPart: string, index: number) => {
      dirBuilder += `${dirPart}${sep}`;
      if (!existsSync(dirBuilder)) {
        mkdirSync(dirBuilder);
      }
    });
  codegenModuleWithBespokes(
    module.bespokes(),
    module.destination(),
    module.render({
      name,
      path,
    }),
  );
}

function codegenModuleWithBespokes(
  bespokes: string[],
  destination: string,
  module: string,
): void {
  let mutableModule: string = module;
  if (existsSync(destination)) {
    const originalModule: string = readFileSync(destination, "ascii");
    bespokes.forEach((bespoke: string) => {
      mutableModule = codegenModuleWithBespoke(
        bespoke,
        mutableModule,
        originalModule,
      );
    });
  }
  writeFileSync(destination, mutableModule);
}

function codegenModuleWithBespoke(
  bespoke: string,
  module: string,
  originalModule: string,
): string {
  const start: string = startTemplate.replace("@0", bespoke);
  const end: string = endTemplate.replace("@0", bespoke);
  const originalLines: string[] = originalModule.split("\n");
  const originalStartIdx: number = originalLines.findIndex(
    (line: string): boolean => line.indexOf(start) !== -1,
  );
  const originalEndIdx: number = originalLines.findIndex(
    (line: string): boolean => line.indexOf(end) !== -1,
  );
  if (originalStartIdx === -1 || originalEndIdx === -1) {
    return module;
  }
  const customCode: string[] = originalLines.slice(
    originalStartIdx + 1,
    originalEndIdx,
  );
  const lines: string[] = originalModule.split("\n");
  const startIdx: number = lines.findIndex(
    (line: string): boolean => line.indexOf(start) !== -1,
  );
  const endIdx: number = lines.findIndex(
    (line: string): boolean => line.indexOf(end) !== -1,
  );
  const moduleStart: string[] = lines.slice(0, startIdx  + 1);
  const moduleEnd: string[] = lines.slice(endIdx);

  return ([] as string[])
    .concat(moduleStart, customCode, moduleEnd)
    .join("\n");
}
