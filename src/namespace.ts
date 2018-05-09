import { Builder } from "./builder";
import { IContext, NamedRenderer, TRenderer } from "./renderer";

export interface INamespace {
  readonly content: TRenderer[];
  readonly name: string;
}

export class Namespace extends NamedRenderer {

  public static newExported(props: INamespace): Namespace {
    return new Namespace(props, true);
  }

  public static newInternal(props: INamespace): Namespace {
    return new Namespace(props, false);
  }

  private constructor(
    private readonly props: INamespace,
    private readonly exported: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [...Namespace.genericBespokes(this.props.content)];
  }

  public identifiers(): string[] {
    return [...Namespace.genericIdentifiers(this.props.content), this.props.name];
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if (this.exported) {
      builder.add("export ");
    }
    builder
      .addThenNewline(`namespace ${this.props.name} {`)
      .indent();
    this.props.content
      .forEach(
        (content: TRenderer): void => {
          builder.ensureOnNewlineAfterEmptyline();
          Namespace.genericRenderer(content)(context, builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
