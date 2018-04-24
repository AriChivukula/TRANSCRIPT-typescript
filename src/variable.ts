import { IRenderable, VariableState } from "./internal";

export abstract class TSVariable implements IRenderable {

  public default: string | undefined = undefined;
  public abstract name: string;
  public state: VariableState = VariableState.IMMUTABLE;
  public abstract types: string[];

  public render(): string {
    let builder: string = "";
    switch (this.state) {
      case VariableState.EXPORTED: {
        builder += "export const ";
        break;
      }
      case VariableState.IMMUTABLE: {
        builder += "const ";
        break;
      }
      case VariableState.MUTABLE: {
        builder += "let ";
        break;
      }
      default: {
        throw Error("Unreachable");
      }
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
