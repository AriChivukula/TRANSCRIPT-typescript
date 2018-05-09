import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";

export const startTemplate: string = "/* BESPOKE START <<@0>> */";

export const endTemplate: string = "/* BESPOKE END <<@0>> */";

export interface IBespoke {
  readonly name: string;
}

export class Bespoke extends NamedRenderer {

  public static new(props: IBespoke): Bespoke {
    return new Bespoke(props);
  }

  private constructor(
    private readonly props: IBespoke,
  ) {
    super();
  }

  protected render(builder: Builder): void {
    builder.withBespokes(this.props.name);
    builder
      .addThenNewline(startTemplate.replace("@0", this.props.name))
      .addThenNewline(endTemplate.replace("@0", this.props.name));
  }

  protected verify(builder: Builder): void {
  }
}
