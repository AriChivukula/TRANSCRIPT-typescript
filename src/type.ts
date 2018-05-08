import { Builder } from "./builder";
import { Property } from "./property";
import { IContext, Renderable } from "./renderable";

export namespace Type {

  export interface IAnonymousSimple {
    readonly type: string;
  }

  export interface IAnonymousUnion {
    readonly types: string[];
  }

  export interface INamedSimple extends IAnonymousSimple {
    readonly name: string;
  }

  export interface INamedUnion extends IAnonymousUnion {
    readonly name: string;
  }

  export interface IArgumentSimple extends INamedSimple {
    readonly default?: string;
  }

  export interface IArgumentProperty {
    readonly property: Property.BaseInstance;
  }

  export interface IArgumentUnion extends INamedUnion {
    readonly default?: string;
  }

  export type TAnonymous = IAnonymousSimple | IAnonymousUnion;

  export type TArgument = IArgumentSimple | IArgumentUnion | IArgumentProperty;

  export type TNamed = INamedSimple | INamedUnion;

  export type T = TAnonymous | TArgument | TNamed;

  export abstract class Base extends Renderable {

    protected constructor(
      private readonly props: T,
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
      } else if ("property" in this.props) {
        return this.props.property.identifiers();
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
      } else if ("types" in this.props) {
        builder.add(this.props.types.join(" | "));
      } else {
        builder.add(
          this.props.property
            .print(context)
            .replace(";\n", ""),
        );
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

  export class Anonymous extends Base {

    public static new(props: TAnonymous): Anonymous {
      return new Anonymous(props, false);
    }
  }

  export class Argument extends Base {

    public static new(props: TArgument): Argument {
      return new Argument(props, false);
    }
  }

  export class Optional extends Base {

    public static new(props: TNamed): Optional {
      return new Optional(props, true);
    }
  }

  export class Required extends Base {

    public static new(props: TNamed): Required {
      return new Required(props, false);
    }
  }
}
