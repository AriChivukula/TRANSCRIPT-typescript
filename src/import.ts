import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";

export enum EImportKind {
  GLOBAL,
  LOCAL,
  RAW,
}

export interface IImportAll {
  readonly name: string;
  readonly withAllAs: string;
}

export interface IImportDefault {
  readonly name: string;
  readonly withDefaultAs: string;
}

export interface IImportRaw {
  readonly name: string;
}

export interface IImportSome {
  readonly name: string;
  readonly with: string[];
}

export type TImport = IImportAll | IImportDefault | IImportRaw | IImportSome;

export class Import extends NamedRenderer {

  public static new(props: TImport): Import {
    return new Import(props);
  }

  private constructor(
    private readonly props: TImport,
  ) {
    super();
  }

  public compare(i: Import): number {
    return this.props.name.localeCompare(i.props.name);
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

  protected render(builder: Builder): void {
    builder.withIdentifiers(this.props.name);
    if ("withAllAs" in this.props) {
      builder.addThenNewline(`import * as ${this.props.withAllAs} from "${this.props.name}";`);
    } else if ("withDefaultAs" in this.props) {
      builder.addThenNewline(`import ${this.props.withDefaultAs} from "${this.props.name}";`);
    } else if ("with" in this.props) {
      builder
        .addThenNewline("import {")
        .indent();
      this.props.with
        .sort(
          (a: string, b: string): number =>
            a.toLowerCase()
              .localeCompare(b.toLowerCase()),
        )
        .forEach(
          (name: string): void => { builder.addThenNewline(`${name},`); },
        );
      builder
        .unindent()
        .addThenNewline(`} from "${this.props.name}";`);
    } else {
      builder.addThenNewline(`import "${this.props.name}";`);
    }
  }

  protected verify(builder: Builder): void {
  }
}
