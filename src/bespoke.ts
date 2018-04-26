import { Composable, IRenderContext } from "./internal";

const startTemplate: string = "/* START BESPOKE SECTION <<@0>> */";

const endTemplate: string = "/* END BESPOKE SECTION <<@0>> */";

export interface IBespoke {
  name: string;
}

export class Bespoke extends Composable {

  public static new(props: IBespoke): Composable {
    return new Bespoke(props);
  }

  private constructor(
    private readonly props: IBespoke,
  ) {
    super();
  }

  public render(context: IRenderContext): string {
    let builder: string = "";
    builder += startTemplate.replace("@0", this.props.name);
    builder += "\n";
    builder += endTemplate.replace("@0", this.props.name);
    builder += "\n";

    return builder;
  }
}
