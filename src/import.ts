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

export type TImport = IImportAll | IImportDefault | IImportSome;

export class Import {

  public static new(props: TImport): Import {
    return new Import(props);
  }

  public static renderMany(imports: Import[]): string {
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }
    builder += Import.renderSection(
      imports
        .filter(
          (imp: Import): boolean => !imp.props.module.startsWith("."),
        )
        .sort((a: Import, b: Import) => Import.sort(a, b)),
    );
    builder += Import.renderSection(
      imports
        .filter(
          (imp: Import): boolean => imp.props.module.startsWith("."),
        )
        .sort((a: Import, b: Import) => Import.sort(a, b)),
    );

    return builder;
  }

  private static renderSection(imports: Import[]): string {
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }
    builder += "\n";
    imports.forEach((imp: Import) => builder += imp.render());

    return builder;
  }

  private static sort(a: Import, b: Import): number {
    return a.props.module.toLowerCase()
      .localeCompare(b.props.module.toLowerCase());
  }

  private constructor(
    private readonly props: TImport,
  ) { }

  public render(): string {
    let builder: string = "";
    if ("nameAll" in this.props) {
      builder += `import * as ${this.props.nameAll} from "${this.props.module}";\n`;
    } else if ("nameDefault" in this.props) {
      builder += `import ${this.props.nameDefault} from "${this.props.module}";\n`;
    } else if ("names" in this.props) {
      const name: string = this.props.names
        .sort(
          (a: string, b: string): number =>
            a.toLowerCase()
              .localeCompare(b.toLowerCase()),
        )
        .join(", ");
      builder += `import { ${name} } from "${this.props.module}";\n`;
    } else {
      throw new Error(`Unexpected import type ${this.props}`);
    }

    return builder;
  }
}
