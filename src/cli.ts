#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { Glob } from "glob";
import { dirname, sep } from "path";

import { Module } from "./index";

const expectedArgLength: number = 3;
if (process.argv.length !== expectedArgLength) {
  throw new Error("Usage is `typescriptase GLOB`");
}
const moduleGlob: string = process.argv[expectedArgLength - 1];

new Glob(
  moduleGlob,
  {},
  (err: Error | null, files: string[]): void => {
    if (err !== null) {
      throw err;
    }
    files.forEach(
      (modulePath: string) => {
        // tslint:disable-next-line
        const codegen: { [index:string]: any } = require(`../${modulePath}`);
        for (const key in codegen) {
          if (codegen[key] instanceof Module) {
            // tslint:disable-next-line
            const module: Module = codegen[key];
            const dir: string = dirname(module.destination());
            let partialDir: string = "";
            dir.split(sep)
              .forEach(
                (currentValue: string, index: number) => {
                  partialDir += `${currentValue}${sep}`;
                  if (!existsSync(partialDir)) {
                    mkdirSync(partialDir);
                  }
                },
              );
            writeFileSync(module.destination(), module.print(modulePath));
          }
        }
      },
    );
  },
);
