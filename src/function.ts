import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IFunction {
  async: boolean;
  content: Renderable[];
  exported: boolean;
  inputs: { [index: string]: string};
  name: string;
  output: string;
}

export class Function extends Renderable {

  public static new(props: IFunction): Function {
    return new Function(props);
  }

  private constructor(
    private readonly props: IFunction,
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
    if (this.props.exported) {
      builder.add("export ");
    }
    if (this.props.async) {
      builder.add("async ");
    }
    builder
      .addLine(`function ${this.props.name}(`)
      .indent();
    for (const name of Object.keys(this.props.inputs)) {
      builder.addLine(`${name}: ${this.props.inputs[name]},`);
    }
    builder
      .unindent()
      .addLine(`): ${this.props.output} {`)
      .indent();
    this.props.content
      .forEach(
        (content: Renderable): void => {
          content.print(context, builder);
        },
      );
    builder
      .unindent()
      .addLine("}");
  }

  protected verify(context: IContext): void {
  }
}
