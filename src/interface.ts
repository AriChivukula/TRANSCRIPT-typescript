import { Builder } from "./builder";
import { IContext, Renderable } from "./renderer";
import { Type } from "./type";

export interface IInterface {
  readonly extends?: string[];
  readonly kind?: string;
  readonly name: string;
  readonly templates?: string[];
  readonly types: Array<Type.FromMethod | Type.Optional | Type.Required>;
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
    if (this.props.extends !== undefined) {
      builder.add(` extends ${this.props.extends.join(", ")}`);
    }
    builder
      .addThenNewline(" {")
      .indent();
    if ("kind" in this.props) {
      builder.addThenNewline(`kind: "${this.props.kind}";`);
    }
    this.props.types.forEach(
      (type: Type.Required | Type.Optional): void => {
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
