import { Builder } from "./builder";
import { IContext, NamedRenderer, TRenderer } from "./renderer";
import { Type } from "./type";

export interface IFunction {
  readonly content: TRenderer[];
  readonly inTypes: Type.Argument[];
  readonly name: string;
  readonly outType: Type.Anonymous;
  readonly templates?: string[];
}

export class Function extends NamedRenderer {

  public static newAsyncExported(props: IFunction): Function {
    return new Function(props, true, true);
  }

  public static newAsyncInternal(props: IFunction): Function {
    return new Function(props, true, false);
  }

  public static newSyncExported(props: IFunction): Function {
    return new Function(props, false, true);
  }

  public static newSyncInternal(props: IFunction): Function {
    return new Function(props, false, false);
  }

  private constructor(
    private readonly props: IFunction,
    private readonly async: boolean,
    private readonly exported: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [...Function.genericBespokes(this.props.content)];
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
    if (this.async) {
      builder.add("async ");
    }
    builder.add(`function ${this.props.name}`);
    if (this.props.templates !== undefined) {
      builder.add(`<${this.props.templates.join(", ")}>`);
    }
    builder
      .addThenNewline("(")
      .indent();
    this.props.inTypes.forEach(
      (type: Type.Argument): void => {
        type.run(context, builder);
        builder.addThenNewline(",");
      },
    );
    builder
      .unindent()
      .add("): ");
    this.props.outType.run(context, builder);
    builder
      .addThenNewline(" {")
      .indent();
    this.props.content
      .forEach(
        (content: TRenderer): void => {
          Function.genericRenderer(content)(context, builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
