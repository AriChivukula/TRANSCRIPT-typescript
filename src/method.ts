import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export namespace Method {

  export enum EKind {
    PRIVATE = "private",
    PROTECTED = "protected",
    PUBLIC = "public",
  }

  export interface I {
    readonly content?: Renderable[];
    readonly inTypes: Type.Argument[];
    readonly name: string;
    readonly outType: Type.Anonymous;
    readonly templates?: string[];
  }

  export abstract class Base extends Renderable {

    protected constructor(
      private readonly props: I,
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
      const bespokes: string[][] = this.props.content
        .map((content: Renderable) => content.bespokes());

      return ([] as string[]).concat(...bespokes);
    }

    public identifiers(): string[] {
      return [this.props.name];
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
      builder.add(this.props.name);
      if (this.props.templates !== undefined) {
        builder.add(`<${this.props.templates.join(", ")}>`);
      }
      builder
        .addLine("(")
        .indent();
      this.props.inTypes.forEach(
        (type: Type.Argument): void => {
          type.run(context, builder);
          builder.addLine(",");
        },
      );
      builder
        .unindent()
        .add("): ");
      this.props.outType.run(context, builder);
      if (this.props.content === undefined) {
        builder.addLine(";");
      } else {
        builder
          .addLine(" {")
          .indent();
        this.props.content
          .forEach(
            (content: Renderable): void => {
              content.run(context, builder);
            },
          );
        builder
          .unindent()
          .addLine("}");
      }
    }

    protected verify(context: IContext): void {
    }
  }

  export abstract class BaseInstance extends Base {}

  export namespace Instance {

    export class Private extends BaseInstance {

      public static newAsync(props: I): Private {
        return new Private(props, true, false, EKind.PRIVATE);
      }

      public static newSync(props: I): Private {
        return new Private(props, false, false, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseInstance {

      public static newAsync(props: I): Protected {
        return new Protected(props, true, false, EKind.PROTECTED);
      }

      public static newSync(props: I): Protected {
        return new Protected(props, false, false, EKind.PROTECTED);
      }
    }

    export class Public extends BaseInstance {

      public static newAsync(props: I): Public {
        return new Public(props, true, false, EKind.PUBLIC);
      }

      public static newSync(props: I): Public {
        return new Public(props, false, false, EKind.PUBLIC);
      }
    }
  }

  export abstract class BaseStatic extends Base {}

  export namespace Static {

    export class Private extends BaseStatic {

      public static newAsync(props: I): Private {
        return new Private(props, true, true, EKind.PRIVATE);
      }

      public static newSync(props: I): Private {
        return new Private(props, false, true, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseStatic {

      public static newAsync(props: I): Protected {
        return new Protected(props, true, true, EKind.PROTECTED);
      }

      public static newSync(props: I): Protected {
        return new Protected(props, false, true, EKind.PROTECTED);
      }
    }

    export class Public extends BaseStatic {

      public static newAsync(props: I): Public {
        return new Public(props, true, true, EKind.PUBLIC);
      }

      public static newSync(props: I): Public {
        return new Public(props, false, true, EKind.PUBLIC);
      }
    }
  }
}
