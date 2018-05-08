import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IType {
  readonly assignment: string;
  readonly name: string;
}

export class Type extends Renderable {

  public static newExported(props: IType): Type {
    return new Type(props, true);
  }

  public static newInternal(props: IType): Type {
    return new Type(props, false);
  }

  private constructor(
    private readonly props: IType,
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
