import { IRenderable, IRenderContext } from "./internal";

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

export class Import implements IRenderable<Import> {

  public static new(props: TImport): IRenderable<Import> {
    return new Import(props);
  }

  public static renderMany(
    imports: Array<IRenderable<Import>>,
    context: IRenderContext,
  ): string {
    const typedImports: Import[] = imports as Import[];
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }
    builder += Import.renderSection(
      typedImports
        .filter(
          (i: Import): boolean => !i.props.module.startsWith("."),
        )
        .sort((a: Import, b: Import) => Import.sort(a, b)),
      context,
    );
    builder += Import.renderSection(
      typedImports
        .filter(
          (i: Import): boolean => i.props.module.startsWith("."),
        )
        .sort((a: Import, b: Import) => Import.sort(a, b)),
      context,
    );

    return builder;
  }

  private static renderSection(imports: Import[], context: IRenderContext): string {
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }
    builder += "\n";
    imports.forEach((i: Import) => builder += i.render(context));

    return builder;
  }

  private static sort(a: Import, b: Import): number {
    return a.props.module.toLowerCase()
      .localeCompare(b.props.module.toLowerCase());
  }

  private constructor(
    private readonly props: TImport,
  ) { }

  public render(context: IRenderContext): string {
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
