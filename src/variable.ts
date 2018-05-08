import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export interface IVariable {
  readonly assignment?: string;
  readonly type: Type.Named;
}

export class Variable extends Renderable {

  public static newExported(props: IVariable): Variable {
    return new Variable(props, true, false);
  }

  public static newImmutable(props: IVariable): Variable {
    return new Variable(props, false, false);
  }

  public static newMutable(props: IVariable): Variable {
    return new Variable(props, false, true);
  }

  private constructor(
    private readonly props: IVariable,
    private readonly exported: boolean,
    private readonly mutable: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public identifiers(): string[] {
    return this.props.type.identifiers();
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if (this.exported) {
      builder.add("export ");
    }
    if (this.mutable) {
      builder.add("let ");
    } else {
      builder.add("const ");
    }
    this.props.type.run(context, builder);
    if (this.props.assignment !== undefined) {
      builder.addLine(` = ${this.props.assignment};`);
    } else {
      builder.addLine(";");
    }
  }

  protected verify(context: IContext): void {
  }
}
