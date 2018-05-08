import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export const startTemplate: string = "/* BESPOKE START <<@0>> */";

export const endTemplate: string = "/* BESPOKE END <<@0>> */";

export interface IBespoke {
  readonly name: string;
}

export class Bespoke extends Renderable {

  public static new(props: IBespoke): Bespoke {
    return new Bespoke(props);
  }

  private constructor(
    private readonly props: IBespoke,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [this.props.name];
  }

  public identifiers(): string[] {
    return [this.props.name];
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    builder
      .addThenNewline(startTemplate.replace("@0", this.props.name))
      .addThenNewline(endTemplate.replace("@0", this.props.name));
  }

  protected verify(context: IContext): void {
  }
}
