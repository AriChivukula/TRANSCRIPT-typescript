import { createHash, Hash } from "crypto";

import { Import } from "./import";
import { Composable, IRenderable, IRenderContext } from "./internal";

const headerTemplate: string = `/**
 * DO NOT MANUALLY EDIT; this file is fully generated.
 *
 * SOURCE<<@0>>
 * SIGNED<<@1>>
 */`;

export interface IModule {
  content: Array<IRenderable<Composable>>;
  destination: string;
  imports: Array<IRenderable<Import>>;
}

export class Module implements IRenderable<Module> {

  public static new(props: IModule): IRenderable<Module> {
    return new Module(props);
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

  public render(context: IRenderContext): string {
    let builder: string = "\n";
    builder += Import.renderMany(this.props.imports, context);
    if (this.props.content.length > 0) {
      builder += "\n";
      this.props.content
        .forEach(
          (currentValue: IRenderable<Composable>, index: number): void => {
            builder += currentValue.render(context);
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
