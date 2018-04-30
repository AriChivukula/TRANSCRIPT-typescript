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
  ): string {
    let builder: string = "\n";
    if (this.props.exported) {
      builder += "export ";
    }
    builder += `interface ${this.props.name} {\n`;
    for (const name of Object.keys(this.props.types)) {
      builder += `  ${name}: ${this.props.types[name]};\n`;
    }
    builder += "}\n";

    return builder;
  }

  protected verify(context: IContext): void {
  }
}
