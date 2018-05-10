import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";
import { Type } from "./type";

export namespace Property {

  export enum E {
    PRIVATE = "private",
    PROTECTED = "protected",
    PUBLIC = "public",
  }

  export interface I {
    readonly assignment?: string;
    readonly type: Type.Required | Type.Optional;
  }

  export abstract class Base extends NamedRenderer {

    protected constructor(
      private readonly props: I,
      private readonly readonly: boolean,
      private readonly isStatic: boolean,
      private readonly kind: E,
    ) {
      super();
    }

    protected render(builder: Builder): void {
      builder.add(`${this.kind} `);
      if (this.readonly) {
        builder.add("readonly ");
      }
      if (this.isStatic) {
        builder.add("static ");
      }
      this.props.type.run(builder);
      if (this.props.assignment !== undefined) {
        builder.addThenNewline(` = ${this.props.assignment};`);
      } else {
        builder.addThenNewline(";");
      }
    }

    protected verify(builder: Builder): void {
    }
  }

  export abstract class BaseInstance extends Base {}

  export namespace Instance {

    export class Private extends BaseInstance {

      public static newImmutable(props: I): Private {
        return new Private(props, true, false, E.PRIVATE);
      }

      public static newMutable(props: I): Private {
        return new Private(props, false, false, E.PRIVATE);
      }
    }

    export class Protected extends BaseInstance {

      public static newImmutable(props: I): Protected {
        return new Protected(props, true, false, E.PROTECTED);
      }

      public static newMutable(props: I): Protected {
        return new Protected(props, false, false, E.PROTECTED);
      }
    }

    export class Public extends BaseInstance {

      public static newImmutable(props: I): Public {
        return new Public(props, true, false, E.PUBLIC);
      }

      public static newMutable(props: I): Public {
        return new Public(props, false, false, E.PUBLIC);
      }
    }
  }

  export abstract class BaseStatic extends Base {}

  export namespace Static {

    export class Private extends BaseStatic {

      public static newImmutable(props: I): Private {
        return new Private(props, true, true, E.PRIVATE);
      }

      public static newMutable(props: I): Private {
        return new Private(props, false, true, E.PRIVATE);
      }
    }

    export class Protected extends BaseStatic {

      public static newImmutable(props: I): Protected {
        return new Protected(props, true, true, E.PROTECTED);
      }

      public static newMutable(props: I): Protected {
        return new Protected(props, false, true, E.PROTECTED);
      }
    }

    export class Public extends BaseStatic {

      public static newImmutable(props: I): Public {
        return new Public(props, true, true, E.PUBLIC);
      }

      public static newMutable(props: I): Public {
        return new Public(props, false, true, E.PUBLIC);
      }
    }
  }
}
