import { IContext, IRenderable } from "./internal";

export const startTemplate: string = "/* BESPOKE START <<@0>> */";

export const endTemplate: string = "/* BESPOKE END <<@0>> */";

export interface IBespoke {
  name: string;
}

export class Bespoke implements IRenderable {

  public static new(props: IBespoke): Bespoke {
    return new Bespoke(props);
  }

  private constructor(
    private readonly props: IBespoke,
  ) {}

  public bespokes(): string[] {
    return [this.props.name];
  }

  public render(context: IContext): string {
    let builder: string = "\n";
    builder += startTemplate.replace("@0", this.props.name);
    builder += "\n";
    builder += endTemplate.replace("@0", this.props.name);
    builder += "\n";

    return builder;
  }

  public sortKey(): string {
    return this.props.name;
  }
}
