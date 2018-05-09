import { Builder } from "./builder";
import { NamedRenderer, TRenderer } from "./renderer";

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

  protected render(builder: Builder): void {
    builder.withIdentifiers(this.props.name);
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
          Namespace.genericRenderer(content)(builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(builder: Builder): void {
  }
}
