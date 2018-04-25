import { createHash, Hash } from "crypto";

import { IRenderable } from "./internal";

const headerTemplate: string = `/**
 * DO NOT MANUALLY EDIT; this file is fully generated.
 *
 * SOURCE<<@0>>
 * SIGNED<<@1>>
 */`;

export interface IImportAll {
  module: string;
  nameAll: string;
}

export interface IImportDefault {
  module: string;
  nameDefault: string;
}

export interface IImportSome {
  module: string;
  names: string[];
}

export type IImport = IImportAll | IImportDefault | IImportSome;

export interface IModule {
  content: IRenderable[];
  destination: string;
  imports: IImport[];
}

export interface IModuleContext {
  name: string;
  path: string;
}

export class Module {

  public static new(props: IModule): Module {
    return new Module(props);
  }

  private static buildImports(imports: IImport[]): string {
    let builder: string = "";
    if (imports.length < 1) {
      return builder;
    }
    builder += "\n";
    imports.forEach((imp: IImport) => {
      if ("nameAll" in imp) {
        builder += `import * as ${imp.nameAll} from "${imp.module}";\n`;
      } else if ("nameDefault" in imp) {
        builder += `import ${imp.nameDefault} from "${imp.module}";\n`;
      } else if ("names" in imp) {
        const name: string = imp.names
          .sort(
            (a: string, b: string): number =>
              a.toLowerCase()
                .localeCompare(b.toLowerCase()),
          )
          .join(", ");
        builder += `import { ${name} } from "${imp.module}";\n`;
      } else {
        throw new Error(`Unexpected import type ${imp}`);
      }
    });

    return builder;
  }

  private static getHash(content: string): string {
    const hash: Hash = createHash("SHA512");
    hash.update(content);

    return hash.digest("base64");
  }

  private constructor(
    private readonly props: IModule,
  ) { }

  public destination(): string {
    return this.props.destination;
  }

  public print(context: IModuleContext): string {
    let builder: string = "\n";
    if (this.props.imports.length > 0) {
      builder += Module.buildImports(
        this.props.imports
          .filter(
            (imp: IImport): boolean => !imp.module.startsWith("."),
          )
          .sort(
            (impA: IImport, impB: IImport): number =>
              impA.module.toLowerCase()
                .localeCompare(impB.module.toLowerCase()),
          ),
      );
      builder += Module.buildImports(
        this.props.imports
          .filter(
            (imp: IImport): boolean => imp.module.startsWith("."),
          )
          .sort(
            (impA: IImport, impB: IImport): number =>
              impA.module.toLowerCase()
                .localeCompare(impB.module.toLowerCase()),
          ),
      );
    }
    if (this.props.content.length > 0) {
      builder += "\n";
      this.props.content
        .forEach(
          (currentValue: IRenderable, index: number): void => {
            builder += currentValue.render();
            builder += "\n";
          },
        );
    }
    const header: string = headerTemplate
      .replace("@0", `${context.path}::${context.name}`)
      .replace("@1", Module.getHash(builder));

    return header + builder;
  }
}
