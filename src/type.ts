import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface ISimpleType {
  readonly name?: string;
  readonly type: string;
}

export interface IUnionType {
  readonly name?: string;
  readonly types: string[];
}

export type TType = ISimpleType | IUnionType;

export class Type extends Renderable {

  public static newOptional(props: TType): Type {
    return new Type(props, true);
  }

  public static newRequired(props: TType): Type {
    return new Type(props, false);
  }

  private constructor(
    private readonly props: TType,
    private readonly optional: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public identifiers(): string[] {
    if (this.props.name !== undefined) {
      return [this.props.name];
    }

    return [];
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if (this.props.name !== undefined) {
      builder.add(`${this.props.name}${this.optional ? "?" : ""}: `);
    }
    if ("type" in this.props) {
      builder.add(this.props.type);
    } else {
      builder.add(this.props.types.join(" | "));
    }
  }

  protected verify(context: IContext): void {
  }
}
