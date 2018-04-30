import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IInterface {
  exported: boolean;
  name: string;
  types: { [index: string]: string};
}

export class Interface extends Renderable {

  public static new(props: IInterface): Interface {
    return new Interface(props);
  }

  private constructor(
    private readonly props: IInterface,
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
    if (this.props.exported) {
      builder.add("export ");
    }
    builder
      .addLine(`interface ${this.props.name} {`)
      .indent();
    for (const name of Object.keys(this.props.types)) {
      builder.addLine(`${name}: ${this.props.types[name]};`);
    }
    builder
      .unindent()
      .addLine("}");
  }

  protected verify(context: IContext): void {
  }
}
