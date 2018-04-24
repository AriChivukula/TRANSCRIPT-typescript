import { EVariableKind, IRenderable } from "./internal";

export interface IVariable {
  assignment?: string;
  kind: EVariableKind;
  name: string;
  types: string[];
}

export class Variable implements IRenderable {

  public static new(props: IVariable): IRenderable {
    return new Variable(props);
  }

  private constructor(
    private readonly props: IVariable,
  ) { }

  public render(): string {
    let builder: string = "";
    switch (this.props.kind) {
      case EVariableKind.EXPORTED: {
        builder += "export const ";
        break;
      }
      case EVariableKind.IMMUTABLE: {
        builder += "const ";
        break;
      }
      case EVariableKind.MUTABLE: {
        builder += "let ";
        break;
      }
      default: {
        throw Error("Unreachable");
      }
    }
    builder += `${this.props.name}: `;
    this.props.types.forEach(
      (currentValue: string, index: number): void => {
        builder += `${currentValue}`;
        if (index + 1 !== this.props.types.length) {
          builder += " | ";
        }
      },
    );
    if (this.props.assignment !== undefined) {
      builder += ` = "${this.props.assignment}";`;
    } else {
      builder += ";";
    }

    return builder;
  }
}
