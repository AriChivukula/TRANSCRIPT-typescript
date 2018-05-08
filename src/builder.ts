enum EBuilderVerifyMode {
  CONTENT,
  HEADER,
  INDENT,
  PRINT,
  TRY,
}

export class Builder {

  public static new(): Builder {
    return new Builder();
  }

  private built: string = "";
  private header: string | undefined;
  private indentation: number = 0;
  private tryLevel: number = 0;

  private constructor() {}

  public add(content: string): Builder {
    return this.addImpl(content, false, false, false);
  }

  public addThenNewline(content: string): Builder {
    return this.addImpl(content, false, true, false);
  }

  public await(content: string): Builder {
    return this.addImpl(content, true, false, false);
  }

  public awaitThenNewline(content: string): Builder {
    return this.addImpl(content, true, true, false);
  }

  public catch(name?: string): Builder {
    this.verify(EBuilderVerifyMode.TRY);
    this.unindent();
    if (name === undefined) {
      this.addThenNewline("} catch {");
    } else {
      this.addThenNewline(`} catch(${name}) {`);
    }

    return this.indent();
  }

  public endTry(): Builder {
    this.verify(EBuilderVerifyMode.TRY);
    this.tryLevel--;

    return this
      .unindent()
      .addThenNewline("}");
  }

  public ensureOnNewline(): Builder {
    return this.ensureOnNewlineImpl(1);
  }

  public ensureOnNewlineAfterEmptyline(): Builder {
    return this.ensureOnNewlineImpl(2);
  }

  public finally(): Builder {
    this.verify(EBuilderVerifyMode.TRY);

    return this
      .unindent()
      .addThenNewline("} finally {")
      .indent();
  }

  public indent(): Builder {
    return this.indentImpl(1);
  }

  public print(): string {
    this.verify(EBuilderVerifyMode.PRINT);
    const b: Builder = Builder.new();
    if (this.header !== undefined) {
      b.built = this.header;
    }
    b.ensureOnNewlineAfterEmptyline();
    b.built += this.built;
    while (b.built.endsWith("\n\n")) {
      b.built = b.built.slice(0, b.built.length - 1);
    }

    return b.built;
  }

  public return(content: string): Builder {
    return this.addImpl(content, false, true, true);
  }

  public returnAwait(content: string): Builder {
    return this.addImpl(content, true, true, true);
  }

  public setHeader(header: string): Builder {
    this.verify(EBuilderVerifyMode.HEADER);
    this.header = header;

    return this;
  }

  public try(): Builder {
    this.tryLevel++;
    this.verify(EBuilderVerifyMode.TRY);

    return this
      .addThenNewline("try {")
      .indent();
  }

  public unindent(): Builder {
    return this.indentImpl(-1);
  }

  private addImpl(
    content: string,
    isAsync: boolean,
    newlineAfter: boolean,
    isReturn: boolean,
  ): Builder {
    this.verify(EBuilderVerifyMode.CONTENT, content);
    if (this.built.length > 0 && this.built.endsWith("\n")) {
      this.built += "  ".repeat(this.indentation);
    }
    if (isReturn) {
      this.built += "return ";
    }
    if (isAsync) {
      this.built += "await ";
    }
    this.built += content;
    if (newlineAfter) {
      this.built += "\n";
    }

    return this;
  }

  private ensureOnNewlineImpl(newLinesWanted: number): Builder {
    if (this.built.length === 0) {
      return this;
    }
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

  private indentImpl(delta: number): Builder {
    this.indentation += delta;
    this.verify(EBuilderVerifyMode.INDENT);

    return this;
  }

  private verify(
    mode: EBuilderVerifyMode,
    content?: string,
  ): void {
    if (mode === EBuilderVerifyMode.CONTENT) {
      if (content === undefined) {
        throw new Error("Unreachable");
      }
      if (content === "") {
        throw new Error("Unexpected empty string");
      }
      if (content.includes("\n")) {
        throw new Error("Unexpected newline");
      }
      if (content.includes("\t")) {
        throw new Error("Unexpected tab");
      }
      if (content.includes("await")) {
        throw new Error("Unexpected await");
      }
      if (content.includes("return")) {
        throw new Error("Unexpected return");
      }
    }
    if (mode === EBuilderVerifyMode.HEADER) {
      if (this.header !== undefined) {
        throw new Error("Cannot set header twice");
      }
    }
    if (mode === EBuilderVerifyMode.INDENT) {
      if (!this.built.endsWith("\n")) {
        throw new Error("Cannot change indentation without being on newline");
      }
      if (this.indentation < 0) {
        throw new Error("Cannot unindent past 0");
      }
    }
    if (mode === EBuilderVerifyMode.PRINT) {
      if (this.indentation !== 0) {
        throw new Error("Cannot print without zeroed indentation");
      }
      if (this.tryLevel !== 0) {
        throw new Error("Cannot print without completing try statements");
      }
    }
    if (mode === EBuilderVerifyMode.TRY) {
      if (this.tryLevel < 1) {
        throw new Error("Not inside try statement");
      }
    }
  }
}
