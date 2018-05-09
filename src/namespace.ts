import { Builder } from "./builder";
import { IContext, Renderable } from "./renderer";

export interface INamespace {
  readonly content: Renderable[];
  readonly name: string;
}

export class Namespace extends Renderable {

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
    const bespokes: string[][] = this.props.content
      .map((content: Renderable) => content.bespokes());

    return ([] as string[]).concat(...bespokes);
  }

  public identifiers(): string[] {
    const identifiers: string[][] = this.props.content
      .map(
        (content: Renderable) => content.identifiers(),
      );

    return ([] as string[]).concat(...identifiers, [this.props.name]);
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
        (content: Renderable): void => {
          builder.ensureOnNewlineAfterEmptyline();
          content.run(context, builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
