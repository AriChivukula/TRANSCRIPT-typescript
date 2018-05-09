import { Builder } from "./builder";
import { IContext, NamedRenderer, TRenderer } from "./renderer";
import { Type } from "./type";

export namespace Method {

  export enum EKind {
    PRIVATE = "private",
    PROTECTED = "protected",
    PUBLIC = "public",
  }

  export interface IBase {
    readonly content?: TRenderer[];
    readonly templates?: string[];
  }

  export interface IConstructor extends IBase {
    readonly inTypes: Array<Type.Argument | Type.FromProperty>;
  }

  export interface INormal extends IBase {
    readonly inTypes: Type.Argument[];
    readonly name: string;
    readonly outType: Type.Anonymous;
  }

  export type T = IConstructor | INormal;

  export abstract class Base extends NamedRenderer {

    protected constructor(
      private readonly props: T,
      private readonly async: boolean,
      private readonly isStatic: boolean,
      private readonly kind: EKind,
    ) {
      super();
    }

    public bespokes(): string[] {
      if (this.props.content === undefined) {
        return [];
      }

      return [...Base.genericBespokes(this.props.content)];
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
      builder.add(`${this.kind} `);
      if (this.isStatic) {
        builder.add("static ");
      }
      if (this.async) {
        builder.add("async ");
      }
      if (this.props.content === undefined) {
        builder.add("abstract ");
      }
      if ("name" in this.props) {
        builder.add(this.props.name);
      } else {
        builder.add("constructor");
      }
      if (this.props.templates !== undefined) {
        builder.add(`<${this.props.templates.join(", ")}>`);
      }
      builder
        .addThenNewline("(")
        .indent();
      (this.props.inTypes as Type.Base[]).forEach(
        (type: Type.Base): void => {
          type.run(context, builder);
          builder.addThenNewline(",");
        },
      );
      builder
        .unindent()
        .add(")");
      if ("outType" in this.props) {
        builder.add(": ");
        this.props.outType.run(context, builder);
      }
      if (this.props.content === undefined) {
        builder.addThenNewline(";");
      } else {
        builder
          .addThenNewline(" {")
          .indent();
        this.props.content
          .forEach(
            (content: TRenderer): void => {
              Base.genericRenderer(content)(context, builder);
            },
          );
        builder
          .unindent()
          .addThenNewline("}");
      }
    }

    protected verify(context: IContext): void {
    }
  }

  export abstract class BaseInstance extends Base {}

  export namespace Instance {

    export class Private extends BaseInstance {

      public static newAsync(props: INormal): Private {
        return new Private(props, true, false, EKind.PRIVATE);
      }

      public static newConstructor(props: IConstructor): Private {
        return new Private(props, false, false, EKind.PRIVATE);
      }

      public static newSync(props: INormal): Private {
        return new Private(props, false, false, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseInstance {

      public static newAsync(props: INormal): Protected {
        return new Protected(props, true, false, EKind.PROTECTED);
      }

      public static newConstructor(props: IConstructor): Protected {
        return new Protected(props, false, false, EKind.PROTECTED);
      }

      public static newSync(props: INormal): Protected {
        return new Protected(props, false, false, EKind.PROTECTED);
      }
    }

    export class Public extends BaseInstance {

      public static newAsync(props: INormal): Public {
        return new Public(props, true, false, EKind.PUBLIC);
      }

      public static newConstructor(props: IConstructor): Public {
        return new Public(props, false, false, EKind.PUBLIC);
      }

      public static newSync(props: INormal): Public {
        return new Public(props, false, false, EKind.PUBLIC);
      }
    }
  }

  export abstract class BaseStatic extends Base {}

  export namespace Static {

    export class Private extends BaseStatic {

      public static newAsync(props: INormal): Private {
        return new Private(props, true, true, EKind.PRIVATE);
      }

      public static newSync(props: INormal): Private {
        return new Private(props, false, true, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseStatic {

      public static newAsync(props: INormal): Protected {
        return new Protected(props, true, true, EKind.PROTECTED);
      }

      public static newSync(props: INormal): Protected {
        return new Protected(props, false, true, EKind.PROTECTED);
      }
    }

    export class Public extends BaseStatic {

      public static newAsync(props: INormal): Public {
        return new Public(props, true, true, EKind.PUBLIC);
      }

      public static newSync(props: INormal): Public {
        return new Public(props, false, true, EKind.PUBLIC);
      }
    }
  }
}
