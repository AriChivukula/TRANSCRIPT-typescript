import { IContext, Renderable } from "./internal";

export enum EImportKind {
  GLOBAL,
  LOCAL,
  RAW,
}

export interface IImportAll {
  module: string;
  nameAll: string;
}

export interface IImportDefault {
  module: string;
  nameDefault: string;
}

export interface IImportRaw {
  module: string;
}

export interface IImportSome {
  module: string;
  names: string[];
}

export type TImport = IImportAll | IImportDefault | IImportRaw | IImportSome;

export class Import extends Renderable {

  public static new(props: TImport): Import {
    return new Import(props);
  }

  private constructor(
    private readonly props: TImport,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public kind(): EImportKind {
    if (Object.keys(this.props).length === 1) {
      return EImportKind.RAW;
    } else if (this.props.module.startsWith(".")) {
      return EImportKind.LOCAL;
    } else {
      return EImportKind.GLOBAL;
    }
  }

  public render(context: IContext): string {
    let builder: string = "";
    if ("nameAll" in this.props) {
      builder += `import * as ${this.props.nameAll} from "${this.props.module}";`;
    } else if ("nameDefault" in this.props) {
      builder += `import ${this.props.nameDefault} from "${this.props.module}";`;
    } else if ("names" in this.props) {
      builder += "import {\n";
      this.props.names
        .sort(
          (a: string, b: string): number =>
            a.toLowerCase()
              .localeCompare(b.toLowerCase()),
        )
        .forEach(
          (name: string): void => { builder += `  ${name},\n`; },
        );
      builder += `} from "${this.props.module}";`;
    } else {
      builder += `import "${this.props.module}";`;
    }

    return `${builder}`;
  }

  public sortKey(): string {
    return this.props.module;
  }
}
