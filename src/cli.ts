#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, sep } from "path";
import * as yargs from "yargs";

import { endTemplate, Module, startTemplate } from "./index";

// tslint:disable-next-line
yargs
  .usage(
    "$0",
    "Typescript Codegen",
    (y: yargs.Argv): yargs.Argv => y
      .option(
        "v",
        {
          boolean: true,
          describe: "Verify Only",
        },
      )
      .option(
        "files",
        {
          array: true,
          demandOption: true,
          describe: "Files",
        },
      ),
    (argv: yargs.Arguments): void => {
      // tslint:disable-next-line
      argv.files.forEach(
        (path: string): void => {
          // tslint:disable-next-line
          codegenFile(path, argv.v);
        },
      );
    },
  )
  .help()
  .argv;

function codegenFile(
  path: string,
  inspectOnly: boolean,
): void {
  // tslint:disable-next-line
  let file: { [index: string]: any };
  try {
    // tslint:disable-next-line
    file = require(`${process.cwd()}/${path}`);
  } catch (err) {
    // tslint:disable-next-line
    console.log(`Error loading ${path}`);

    return;
  }
  for (const name in file) {
    if (file[name] instanceof Module) {
      // tslint:disable-next-line
      codegenModule(file[name], path, name, inspectOnly);
    }
  }
}

function codegenModule(
  module: Module,
  path: string,
  name: string,
  inspectOnly: boolean,
): void {
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
    inspectOnly,
  );
}

function codegenModuleWithBespokes(
  bespokes: string[],
  destination: string,
  module: string,
  inspectOnly: boolean,
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
  if (inspectOnly) {
    // tslint:disable-next-line
    console.log(`Skipping writing ${destination}`);
  } else {
    writeFileSync(destination, mutableModule);
  }
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
  const lines: string[] = module.split("\n");
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
