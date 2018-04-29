import { createHash, Hash } from "crypto";

import { EImportKind, Import } from "./import";
import { IContext, IRenderable } from "./internal";

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
  content: IRenderable[];
  destination: string;
}

export class Module {

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
      (i: Import) => builder += `${i.render(context)}\n`,
    );

    return builder;
  }

  private static renderNonImports(
    context: IContext,
    nonImports: IRenderable[],
  ): string {
    let builder: string = "";
    if (nonImports.length === 0) {
      return builder;
    }

    nonImports
      .forEach(
        (currentValue: IRenderable): void => {
          builder += currentValue.render(context);
        },
      );

    return builder;
  }

  private constructor(
    private readonly props: IModule,
  ) {}

  public bespokes(): string[] {
    const bespokes: string[][] = this.props.content
      .map(
        (content: IRenderable) => content.bespokes(),
      );

    return ([] as string[]).concat(...bespokes);
  }

  public destination(): string {
    return this.props.destination;
  }

  public render(context: IContext): string {
    let builder: string = "";

    const imports: Import[] = this.props.content
      .filter(
        (i: IRenderable): i is Import => i instanceof Import,
      )
      .sort(
        (a: Import, b: Import) => a.sortKey()
          .localeCompare(b.sortKey()),
      );
    builder += Module.renderImports(context, imports);
    if (builder.length === 0) {
      builder += "\n";
    }

    const nonImports: IRenderable[] = this.props.content
      .filter(
        (i: IRenderable): boolean => !(i instanceof Import),
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
}
