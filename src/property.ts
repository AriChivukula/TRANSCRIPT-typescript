import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export namespace Property {

  export enum EKind {
    PRIVATE = "private",
    PROTECTED = "protected",
    PUBLIC = "public",
  }

  export interface I {
    readonly assignment?: string;
    readonly type: Type.Required | Type.Optional;
  }

  export abstract class Base extends Renderable {

    protected constructor(
      private readonly props: I,
      private readonly readonly: boolean,
      private readonly isStatic: boolean,
      private readonly kind: EKind,
    ) {
      super();
    }

    public bespokes(): string[] {
      return [];
    }

    public identifiers(): string[] {
      return this.props.type.identifiers();
    }

    protected render(
      context: IContext,
      builder: Builder,
    ): void {
      builder.add(`${this.kind} `);
      if (this.readonly) {
        builder.add("readonly ");
      }
      if (this.isStatic) {
        builder.add("static ");
      }
      this.props.type.run(context, builder);
      if (this.props.assignment !== undefined) {
        builder.addThenNewline(` = ${this.props.assignment};`);
      } else {
        builder.addThenNewline(";");
      }
    }

    protected verify(context: IContext): void {
    }
  }

  export abstract class BaseInstance extends Base {}

  export namespace Instance {

    export class Private extends BaseInstance {

      public static newImmutable(props: I): Private {
        return new Private(props, true, false, EKind.PRIVATE);
      }

      public static newMutable(props: I): Private {
        return new Private(props, false, false, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseInstance {

      public static newImmutable(props: I): Protected {
        return new Protected(props, true, false, EKind.PROTECTED);
      }

      public static newMutable(props: I): Protected {
        return new Protected(props, false, false, EKind.PROTECTED);
      }
    }

    export class Public extends BaseInstance {

      public static newImmutable(props: I): Public {
        return new Public(props, true, false, EKind.PUBLIC);
      }

      public static newMutable(props: I): Public {
        return new Public(props, false, false, EKind.PUBLIC);
      }
    }
  }

  export abstract class BaseStatic extends Base {}

  export namespace Static {

    export class Private extends BaseStatic {

      public static newImmutable(props: I): Private {
        return new Private(props, true, true, EKind.PRIVATE);
      }

      public static newMutable(props: I): Private {
        return new Private(props, false, true, EKind.PRIVATE);
      }
    }

    export class Protected extends BaseStatic {

      public static newImmutable(props: I): Protected {
        return new Protected(props, true, true, EKind.PROTECTED);
      }

      public static newMutable(props: I): Protected {
        return new Protected(props, false, true, EKind.PROTECTED);
      }
    }

    export class Public extends BaseStatic {

      public static newImmutable(props: I): Public {
        return new Public(props, true, true, EKind.PUBLIC);
      }

      public static newMutable(props: I): Public {
        return new Public(props, false, true, EKind.PUBLIC);
      }
    }
  }
}
