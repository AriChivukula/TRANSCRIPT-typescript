import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export interface IInterface {
  readonly name: string;
  readonly templates?: string[];
  readonly types: Type.Named[];
}

export class Interface extends Renderable {

  public static newExported(props: IInterface): Interface {
    return new Interface(props, true);
  }

  public static newInternal(props: IInterface): Interface {
    return new Interface(props, false);
  }

  private constructor(
    private readonly props: IInterface,
    private readonly exported: boolean,
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
    if (this.exported) {
      builder.add("export ");
    }
    builder.add(`interface ${this.props.name}`);
    if (this.props.templates !== undefined) {
      builder.add(`<${this.props.templates.join(", ")}>`);
    }
    builder
      .addThenNewline(" {")
      .indent();
    this.props.types.forEach(
      (type: Type.Named): void => {
        type.run(context, builder);
        builder.addThenNewline(";");
      },
    );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
