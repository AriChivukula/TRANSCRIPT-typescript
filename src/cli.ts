#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { Glob, IGlob } from "glob";
import { dirname, sep } from "path";

import { Module } from "./index";

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
  writeFileSync(destination, module);
}
