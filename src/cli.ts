#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { Glob, IGlob } from "glob";
import { dirname, sep } from "path";

import { endTemplate, Module, startTemplate } from "./index";

((): IGlob => new Glob(getFileGlob(), {}, codegenFileGlob))();

function getFileGlob(): string {
  const expectedArgLength: number = 3;
  if (process.argv.length !== expectedArgLength) {
    throw new Error("Usage is `typescriptase GLOB`");
  }

  return process.argv[expectedArgLength - 1];
}

function codegenFileGlob(err: Error | null, paths: string[]): void {
  if (err !== null) {
    throw err;
  }
  paths.forEach(codegenFile);
}

function codegenFile(path: string): void {
  // tslint:disable-next-line
  const file: { [index: string]: any } = require(`../${path}`);
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
