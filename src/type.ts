import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IAnonymousSimpleType {
  readonly type: string;
}

export interface IAnonymousUnionType {
  readonly types: string[];
}

export interface INamedSimpleType extends IAnonymousSimpleType {
  readonly name: string;
}

export interface INamedUnionType extends IAnonymousUnionType {
  readonly name: string;
}

export interface IArgumentSimpleType extends INamedSimpleType {
  readonly default?: string;
}

export interface IArgumentUnionType extends INamedUnionType {
  readonly default?: string;
}

export type TAnonymousType = IAnonymousSimpleType | IAnonymousUnionType;

export type TArgumentType = IArgumentSimpleType | IArgumentUnionType;

export type TNamedType = INamedSimpleType | INamedUnionType;

export type TType = TAnonymousType | TArgumentType | TNamedType;

export abstract class Type extends Renderable {

  protected constructor(
    private readonly props: TType,
    private readonly optional: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public identifiers(): string[] {
    if ("name" in this.props) {
      return [this.props.name];
    }

    return [];
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if ("name" in this.props) {
      builder.add(`${this.props.name}${this.optional ? "?" : ""}: `);
    }
    if ("type" in this.props) {
      builder.add(this.props.type);
    } else {
      builder.add(this.props.types.join(" | "));
    }
    if ("default" in this.props) {
      if (this.props.default !== undefined) {
        builder.add(` = ${this.props.default}`);
      }
    }
  }

  protected verify(context: IContext): void {
  }
}

export class AnonymousType extends Type {

  public static new(props: TAnonymousType): AnonymousType {
    return new AnonymousType(props, false);
  }
}

export class ArgumentType extends Type {

  public static new(props: TArgumentType): ArgumentType {
    return new ArgumentType(props, false);
  }
}

export class NamedType extends Type {

  public static newOptional(props: TNamedType): NamedType {
    return new NamedType(props, true);
  }

  public static newRequired(props: TNamedType): NamedType {
    return new NamedType(props, false);
  }
}
