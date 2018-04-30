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
  ): string {
    let builder: string = "\n";
    if (this.props.exported) {
      builder += "export ";
    }
    if (this.props.async) {
      builder += "async ";
    }
    builder += `function ${this.props.name}(\n`;
    for (const name of Object.keys(this.props.inputs)) {
      builder += `  ${name}: ${this.props.inputs[name]},\n`;
    }
    builder += `): ${this.props.output} {\n`;
    this.props.content
      .forEach(
        (content: Renderable): void => {
          const line: string = content
            .print(context)
            .trim()
            .replace("\n", "\n  ");
          builder += `  ${line}\n`;
        },
      );
    builder += "}\n";

    return builder;
  }

  protected verify(context: IContext): void {
  }
}
