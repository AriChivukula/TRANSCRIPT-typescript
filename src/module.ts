import { createHash, Hash } from "crypto";

import { IRenderable, IWritable } from "./internal";

const header: string = `/**
 * This file was generated by typescriptace.
 * SOURCE<<@0>>
 * SIGNED<<@1>>
 */`;

export abstract class TSModule implements IWritable {

  private static getHash(content: string): string {
    const hash: Hash = createHash("SHA512");
    hash.update(content);

    return hash.digest("base64");
  }

  public abstract content(): IRenderable[];

  public print(): string {
    let builder: string = "\n";
    this.content()
      .forEach(
        (currentValue: IRenderable, index: number): void => {
          builder += currentValue.render();
          builder += "\n";
        },
      );
    const fmtHeader: string = header
      .replace("@0", this.constructor.name)
      .replace("@1", TSModule.getHash(builder));

    return fmtHeader + builder;
  }
}
