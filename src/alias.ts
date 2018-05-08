import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IAlias {
  readonly assignment: string;
  readonly name: string;
}

export class Alias extends Renderable {

  public static newExported(props: IAlias): Alias {
    return new Alias(props, true);
  }

  public static newInternal(props: IAlias): Alias {
    return new Alias(props, false);
  }

  private constructor(
    private readonly props: IAlias,
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
    builder.addLine(`type ${this.props.name} = ${this.props.assignment};`);
  }

  protected verify(context: IContext): void {
  }
}
