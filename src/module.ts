import { createHash, Hash } from "crypto";

import { IRenderable } from "./internal";

export class TSModule implements IRenderable {

  private static getHash(content: string): string {
    const hash: Hash = createHash("SHA512");
    hash.update(content);

    return hash.digest("base64");
  }

  public render(): string {
    return TSModule.getHash("");
  }
}
