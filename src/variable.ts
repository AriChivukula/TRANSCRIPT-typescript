import { Composable, IRenderContext } from "./internal";

export enum EVariableKind {
  EXPORTED,
  IMMUTABLE,
  MUTABLE,
}

export interface IVariable {
  assignment?: string;
  kind: EVariableKind;
  name: string;
  type: string;
}

export class Variable extends Composable {

  public static new(props: IVariable): Composable {
    return new Variable(props);
  }

  private constructor(
    private readonly props: IVariable,
  ) {
    super();
  }

  public bespokeNames(): string[] {
    return [];
  }

  public render(context: IRenderContext): string {
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
    builder += `${this.props.name}: ${this.props.type}`;
    if (this.props.assignment !== undefined) {
      builder += ` = ${this.props.assignment};`;
    } else {
      builder += ";";
    }

    return builder;
  }
}
