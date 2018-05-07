import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IInterface {
  readonly name: string;
  readonly types: { [index: string]: string};
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
