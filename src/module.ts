import { createHash, Hash } from "crypto";

import { Import } from "./import";
import { Composable, IRenderContext, Renderable } from "./internal";

const headerTemplate: string = `/**
 * DO NOT MANUALLY EDIT; this file is fully generated.
 *
 * SOURCE<<@0>>
 * BESPOKE<<@1>>
 * SIGNED<<@2>>
 */`;

export interface IModule {
  content: Composable[];
  destination: string;
  imports: Import[];
}

export class Module extends Renderable {

  public static new(props: IModule): Renderable {
    return new Module(props);
  }

  private static getHash(content: string): string {
    const hash: Hash = createHash("SHA512");
    hash.update(content);

    return hash.digest("base64");
  }

  private constructor(
    private readonly props: IModule,
  ) {
    super();
  }

  public bespokes(): string[] {
    const bespokes: string[][] = this.props.content
      .map((content: Composable) => content.bespokes());

    return ([] as string[]).concat(...bespokes);
  }

  public destination(): string {
    return this.props.destination;
  }

  public render(context: IRenderContext): string {
    let builder: string = "\n";
    builder += Import.renderMany(this.props.imports, context);
    if (this.props.content.length > 0) {
      builder += "\n";
      this.props.content
        .forEach(
          (currentValue: Composable, index: number): void => {
            builder += currentValue.render(context);
            builder += "\n";
          },
        );
    }
    const header: string = headerTemplate
      .replace("@0", `${context.path}::${context.name}`)
      .replace(
        "@1",
        this.bespokes()
          .join(", "),
      )
      .replace("@2", Module.getHash(builder));

    return header + builder;
  }
}
