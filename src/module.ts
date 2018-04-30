import { createHash, Hash } from "crypto";

import { Builder } from "./builder";
import { EImportKind, Import } from "./import";
import { IContext, Renderable } from "./renderable";

const headerTemplateWithoutBespoke: string = `/**
 * This file is fully generated; do not manually edit.
 *
 * SOURCE<<@0>>
 * SIGNED<<@1>>
 */`;

const headerTemplateWithBespoke: string = `/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<@0>>
 * BESPOKE<<@1>>
 * SIGNED<<@2>>
 */`;

export interface IModule {
  content: Renderable[];
  destination: string;
}

export class Module extends Renderable {

  public static new(props: IModule): Module {
    return new Module(props);
  }

  private static getHash(content: string): string {
    const hash: Hash = createHash("SHA512");
    hash.update(content);

    return hash.digest("base64");
  }

  private static renderImports(
    context: IContext,
    imports: Import[],
  ): string {
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }

    builder += "\n";
    builder += Module.renderImportSection(
      context,
      imports
        .filter(
          (i: Import): boolean => i.kind() === EImportKind.RAW,
        ),
    );
    builder += Module.renderImportSection(
      context,
      imports
        .filter(
          (i: Import): boolean => i.kind() === EImportKind.GLOBAL,
        ),
    );
    builder += Module.renderImportSection(
      context,
      imports
        .filter(
          (i: Import): boolean => i.kind() === EImportKind.LOCAL,
        ),
    );

    return builder;
  }

  private static renderImportSection(
    context: IContext,
    imports: Import[],
  ): string {
    let builder: string = "";
    if (imports.length === 0) {
      return builder;
    }

    builder += "\n";
    imports.forEach(
      (i: Import) => builder += `${i.print(context)}\n`,
    );

    return builder;
  }

  private static renderNonImports(
    context: IContext,
    nonImports: Renderable[],
  ): string {
    let builder: string = "";
    if (nonImports.length === 0) {
      return builder;
    }

    nonImports
      .forEach(
        (currentValue: Renderable): void => {
          builder += currentValue.print(context);
        },
      );

    return builder;
  }

  private constructor(
    private readonly props: IModule,
  ) {
    super();
  }

  public bespokes(): string[] {
    const bespokes: string[][] = this.props.content
      .map(
        (content: Renderable) => content.bespokes(),
      );

    return ([] as string[]).concat(...bespokes);
  }

  public destination(): string {
    return this.props.destination;
  }

  public identifiers(): string[] {
    const identifiers: string[][] = this.props.content
      .map(
        (content: Renderable) => content.identifiers(),
      );

    return ([] as string[]).concat(...identifiers);
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): string {
    let builder: string = "";

    const imports: Import[] = this.props.content
      .filter(
        (i: Renderable): i is Import => i instanceof Import,
      )
      .sort(
        (a: Import, b: Import) => a.identifiers()[0]
          .localeCompare(b.identifiers()[0]),
      );
    builder += Module.renderImports(context, imports);
    if (builder.length === 0) {
      builder += "\n";
    }

    const nonImports: Renderable[] = this.props.content
      .filter(
        (i: Renderable): boolean => !(i instanceof Import),
      );
    builder += Module.renderNonImports(context, nonImports);
    if (builder.length === 0) {
      builder += "\n";
    }

    const bespokes: string[] = this.bespokes();
    let header: string = "";
    if (bespokes.length > 0) {
      header = headerTemplateWithBespoke
        .replace("@0", `${context.path}::${context.name}`)
        .replace("@1", bespokes.join(", "))
        .replace("@2", Module.getHash(builder));
    } else {
      header = headerTemplateWithoutBespoke
        .replace("@0", `${context.path}::${context.name}`)
        .replace("@1", Module.getHash(builder));
    }

    return header + builder;
  }

  protected verify(context: IContext): void {
    this.verifyUniqueBespoke();
    this.verifyUniqueIdentifiers();
  }

  private verifyUniqueBespoke(): void {
    const bespokeArray: string[] = this.bespokes();
    const bespokeSet: Set<string> = new Set(bespokeArray);
    if (bespokeSet.size < bespokeArray.length) {
      throw new Error("Duplicated Bespoke Sections");
    }
  }

  private verifyUniqueIdentifiers(): void {
    const identifierArray: string[] = this.identifiers();
    const identifierSet: Set<string> = new Set(identifierArray);
    if (identifierSet.size < identifierArray.length) {
      throw new Error("Duplicated Identifier Names");
    }
  }
}
