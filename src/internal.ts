export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public renderAndVerify(context: IContext): string {
    this.verify(context);

    return this.render(context);
  }

  protected abstract render(context: IContext): string;

  protected abstract verify(context: IContext): void;
}

export class Builder {

  public static new(): Builder {
    return new Builder();
  }

  private static verify(content: string): void {
    if (content.trim() !== content) {
      throw new Error("Unexpected whitespace");
    }
    if (content.includes("\n")) {
      throw new Error("Unexpected newline");
    }
    if (content.includes("\t")) {
      throw new Error("Unexpected tab");
    }
  }

  private built: string = "";

  private constructor() {}

  public add(content: string): Builder {
    return this.addImpl(content, false);
  }

  public addLine(content: string): Builder {
    return this.addImpl(content, true);
  }

  public ensureOnNewline(): Builder {
    return this.ensureOnNewlineImpl(1);
  }

  public ensureOnNewlineAfterEmptyline(): Builder {
    return this.ensureOnNewlineImpl(2);
  }

  public render(): string {
    return this.built;
  }

  private addImpl(content: string, newLineAfter: boolean): Builder {
    Builder.verify(content);
    this.built += content;
    if (newLineAfter) {
      this.built += "\n";
    }

    return this;
  }

  private ensureOnNewlineImpl(newLinesWanted: number): Builder {
    let newLinesFound: number = 0;
    for (let idx: number = 0; idx < newLinesWanted; idx++) {
      if (this.built.charAt(this.built.length - idx - 1) === "\n") {
        newLinesFound++;
      } else {
        break;
      }
    }
    this.built += "\n".repeat(newLinesWanted - newLinesFound);

    return this;
  }
}
