import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IType {
  assignment: string;
  exported: boolean;
  name: string;
}

export class Type extends Renderable {

  public static new(props: IType): Type {
    return new Type(props);
  }

  private constructor(
    private readonly props: IType,
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
    builder.addLine(`type ${this.props.name} = ${this.props.assignment};`);
  }

  protected verify(context: IContext): void {
  }
}
