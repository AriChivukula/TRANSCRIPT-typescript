import { createHash, Hash } from "crypto";

import { IRenderable } from "./internal";

const headerTemplate: string = `/**
 * DO NOT MANUALLY EDIT; this file is fully generated.
 *
 * SOURCE<<@0>>
 * SIGNED<<@1>>
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

  private constructor(
    private readonly props: IModule,
  ) { }

  public destination(): string {
    return this.props.destination;
  }

  public print(source: string): string {
    let builder: string = "\n";
    this.props.content
      .forEach(
        (currentValue: IRenderable, index: number): void => {
          builder += currentValue.render();
          builder += "\n";
        },
      );
    const header: string = headerTemplate
      .replace("@0", source)
      .replace("@1", Module.getHash(builder));

    return header + builder;
  }
}
