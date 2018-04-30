import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export enum EPropertyKind {
  PRIVATE = "private",
  PROTECTED = "protected",
  PUBLIC = "public",
}

export interface IProperty {
  assignment?: string;
  kind: EPropertyKind;
  name: string;
  readonly: boolean;
  static: boolean;
  type: string;
}

export class Property extends Renderable {

  public static new(props: IProperty): Property {
    return new Property(props);
  }

  private constructor(
    private readonly props: IProperty,
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
    builder.add(`${this.props.kind} `);
    if (this.props.readonly) {
      builder.add("readonly ");
    }
    if (this.props.static) {
      builder.add("static ");
    }
    builder.add(`${this.props.name}: ${this.props.type}`);
    if (this.props.assignment !== undefined) {
      builder.addLine(` = ${this.props.assignment};`);
    } else {
      builder.addLine(";");
    }
  }

  protected verify(context: IContext): void {
  }
}
