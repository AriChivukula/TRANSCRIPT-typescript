import { IContext, Renderable } from "./internal";

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

  public render(context: IContext): string {
    let builder: string = "\n";
    if (this.props.exported) {
      builder += "export ";
    }
    builder += `type ${this.props.name} = ${this.props.assignment};\n`;

    return builder;
  }

  public sortKey(): string {
    return this.props.name;
  }
}
