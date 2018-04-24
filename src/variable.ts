import { IExportable, IRenderable } from "./internal";

export abstract class TSVariable implements IExportable, IRenderable {

  public default: string | undefined = undefined;
  public isExported: boolean = false;
  public isMutable: boolean = false;
  public abstract name: string;
  public abstract types: string[];

  public render(): string {
    let builder: string = "";
    if (this.isExported) {
      builder += "export ";
    }
    if (this.isMutable) {
      builder += "let ";
    } else {
      builder += "const ";
    }
    builder += `${this.name}: `;
    this.types.forEach(
      (currentValue: string, index: number): void => {
        builder += `${currentValue}`;
        if (index + 1 !== this.types.length) {
          builder += " | ";
        }
      },
    );
    if (this.default !== undefined) {
      builder += ` = ${this.default};`;
    } else {
      builder += ";";
    }

    return builder;
  }
}
