import { IContext, Renderable } from "./internal";

export interface IVariable {
  assignment?: string;
  exported: boolean;
  mutable: boolean;
  name: string;
  type: string;
}

export class Variable extends Renderable {

  public static new(props: IVariable): Variable {
    return new Variable(props);
  }

  private constructor(
    private readonly props: IVariable,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public identifiers(): string[] {
    return [this.props.name];
  }

  protected render(context: IContext): string {
    let builder: string = "\n";
    if (this.props.exported) {
      builder += "export ";
    }
    if (this.props.mutable) {
      builder += "let ";
    } else {
      builder += "const ";
    }
    builder += `${this.props.name}: ${this.props.type}`;
    if (this.props.assignment !== undefined) {
      builder += ` = ${this.props.assignment};`;
    } else {
      builder += ";";
    }

    return `${builder}\n`;
  }

  protected verify(context: IContext): void {
  }
}
