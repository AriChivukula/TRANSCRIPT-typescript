import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export enum EMethodKind {
  PRIVATE = "private",
  PROTECTED = "protected",
  PUBLIC = "public",
}

export interface IMethod {
  async: boolean;
  content?: Renderable[];
  inputs: { [index: string]: string};
  kind: EMethodKind;
  name: string;
  output: string;
  static: boolean;
}

export class Method extends Renderable {

  public static new(props: IMethod): Method {
    return new Method(props);
  }

  private constructor(
    private readonly props: IMethod,
  ) {
    super();
  }

  public bespokes(): string[] {
    if (this.props.content === undefined) {
      return [];
    }
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
    builder.add(`${this.props.kind} `);
    if (this.props.static) {
      builder.add("static ");
    }
    if (this.props.async) {
      builder.add("async ");
    }
    if (this.props.content === undefined) {
      builder.add("abstract ");
    }
    builder
      .addLine(`${this.props.name}(`)
      .indent();
    for (const name of Object.keys(this.props.inputs)) {
      builder.addLine(`${name}: ${this.props.inputs[name]},`);
    }
    builder
      .unindent()
      .add(`): ${this.props.output}`);
    if (this.props.content === undefined) {
      builder.addLine(";");
    } else {
      builder
        .addLine(" {")
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
  }

  protected verify(context: IContext): void {
  }
}
