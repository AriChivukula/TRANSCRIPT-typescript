import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

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

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if (this.props.exported) {
      builder.add("export ");
    }
    if (this.props.mutable) {
      builder.add("let ");
    } else {
      builder.add("const ");
    }
    builder.add(`${this.props.name}: ${this.props.type}`);
    if (this.props.assignment !== undefined) {
      builder.addLine(` = ${this.props.assignment};`);
    } else {
      builder.addLine(";");
    }
  }

  protected verify(context: IContext): void {
  }
}
