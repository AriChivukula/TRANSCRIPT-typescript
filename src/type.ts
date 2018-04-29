import { Composable, IRenderContext } from "./internal";

export interface IType {
  assignment: string;
  exported: boolean;
  name: string;
}

export class Type extends Composable {

  public static new(props: IType): Composable {
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

  public render(context: IRenderContext): string {
    let builder: string = "\n";
    if (this.props.exported) {
      builder += "export ";
    }
    builder += `type ${this.props.name} = ${this.props.assignment};\n`;

    return builder;
  }
}
