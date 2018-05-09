import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";
import { Type } from "./type";

export interface IVariable {
  readonly assignment?: string;
  readonly type: Type.Required;
}

export class Variable extends NamedRenderer {

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

  protected render(builder: Builder): void {
    if (this.exported) {
      builder.add("export ");
    }
    if (this.mutable) {
      builder.add("let ");
    } else {
      builder.add("const ");
    }
    this.props.type.run(builder);
    if (this.props.assignment !== undefined) {
      builder.addThenNewline(` = ${this.props.assignment};`);
    } else {
      builder.addThenNewline(";");
    }
  }

  protected verify(builder: Builder): void {
  }
}
