import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export enum EImportKind {
  GLOBAL,
  LOCAL,
  RAW,
}

export interface IImportAll {
  name: string;
  withAllAs: string;
}

export interface IImportDefault {
  name: string;
  withDefaultAs: string;
}

export interface IImportRaw {
  name: string;
}

export interface IImportSome {
  name: string;
  with: string[];
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

  public identifiers(): string[] {
    return [this.props.name];
  }

  public kind(): EImportKind {
    if (Object.keys(this.props).length === 1) {
      return EImportKind.RAW;
    } else if (this.props.name.startsWith(".")) {
      return EImportKind.LOCAL;
    } else {
      return EImportKind.GLOBAL;
    }
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): string {
    let builder: string = "";
    if ("withAllAs" in this.props) {
      builder += `import * as ${this.props.withAllAs} from "${this.props.name}";`;
    } else if ("withDefaultAs" in this.props) {
      builder += `import ${this.props.withDefaultAs} from "${this.props.name}";`;
    } else if ("with" in this.props) {
      builder += "import {\n";
      this.props.with
        .sort(
          (a: string, b: string): number =>
            a.toLowerCase()
              .localeCompare(b.toLowerCase()),
        )
        .forEach(
          (name: string): void => { builder += `  ${name},\n`; },
        );
      builder += `} from "${this.props.name}";`;
    } else {
      builder += `import "${this.props.name}";`;
    }

    return `${builder}`;
  }

  protected verify(context: IContext): void {
  }
}
