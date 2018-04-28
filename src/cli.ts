#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, sep } from "path";

import { endTemplate, Module, startTemplate } from "./index";

getFiles()
  .forEach(codegenFile);

function getFiles(): string[] {
  const commandIndex: number = process.argv
    .findIndex((elt: string) => /cli\.(j|t)s/.test(elt));
  if (commandIndex === -1 || process.argv.length === commandIndex + 1) {
    throw new Error("Usage is `typescriptase GLOB`");
  }

  return process.argv.slice(commandIndex + 1);
}

function codegenFile(path: string): void {
  try {
    // tslint:disable-next-line
    const file: { [index: string]: any } = require(`${process.cwd()}/${path}`);
    for (const name in file) {
      if (file[name] instanceof Module) {
        // tslint:disable-next-line
        codegenModule(file[name], path, name);
      }
    }
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
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
  const originalStartIdx: number = originalModule.indexOf(start);
  const originalEndIdx: number = originalModule.indexOf(end);
  if (originalStartIdx === -1 || originalEndIdx === -1) {
    return module;
  }
  const customCode: string = originalModule.slice(
    originalStartIdx + start.length,
    originalEndIdx - 1,
  );
  const startIdx: number = module.indexOf(start);
  if (startIdx === -1) {
    return module;
  }
  const moduleStart: string = module.slice(0, startIdx + start.length);
  const moduleEnd: string = module.slice(startIdx + start.length);

  return moduleStart + customCode + moduleEnd;
}
