import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IFunction {
  readonly content: Renderable[];
  readonly inTypes: { [index: string]: string};
  readonly name: string;
  readonly outType: string;
}

export class Function extends Renderable {

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
    const bespokes: string[][] = this.props.content
      .map((content: Renderable) => content.bespokes());

    return ([] as string[]).concat(...bespokes);
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
    builder
      .addLine(`function ${this.props.name}(`)
      .indent();
    for (const name of Object.keys(this.props.inTypes)) {
      builder.addLine(`${name}: ${this.props.inTypes[name]},`);
    }
    builder
      .unindent()
      .addLine(`): ${this.props.outType} {`)
      .indent();
    this.props.content
      .forEach(
        (content: Renderable): void => {
          content.run(context, builder);
        },
      );
    builder
      .unindent()
      .addLine("}");
  }

  protected verify(context: IContext): void {
  }
}
