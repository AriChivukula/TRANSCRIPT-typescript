import { Builder } from "./builder";
import { NamedRenderer, TRenderer } from "./renderer";
import { Type } from "./type";

export namespace Function {

  export interface I {
    readonly content: TRenderer[];
    readonly inTypes: Type.Argument[];
    readonly name: string;
    readonly outType: Type.Anonymous;
    readonly templates?: string[];
  }

  export abstract class Base extends NamedRenderer {

    protected constructor(
      private readonly props: I,
      private readonly async: boolean,
      private readonly exported: boolean,
    ) {
      super();
    }

    protected render(builder: Builder): void {
      builder.withIdentifiers(this.props.name);
      if (this.exported) {
        builder.add("export ");
      }
      if (this.async) {
        builder.add("async ");
      }
      builder.add(`function ${this.props.name}`);
      if (this.props.templates !== undefined) {
        builder.add(`<${this.props.templates.join(", ")}>`);
      }
      builder
        .addThenNewline("(")
        .indent();
      this.props.inTypes.forEach(
        (type: Type.Argument): void => {
          type.run(builder);
          builder.addThenNewline(",");
        },
      );
      builder
        .unindent()
        .add("): ");
      this.props.outType.run(builder);
      builder
        .addThenNewline(" {")
        .indent();
      this.props.content
        .forEach(
          (content: TRenderer): void => {
            Base.genericRenderer(content)(builder);
          },
        );
      builder
        .unindent()
        .addThenNewline("}");
    }

    protected verify(builder: Builder): void {
    }
  }

  export class Async extends Base {

    public static newExported(props: I): Async {
      return new Async(props, true, true);
    }

    public static newInternal(props: I): Async {
      return new Async(props, true, false);
    }
  }

  export class Sync extends Base {
    public static newExported(props: I): Sync {
      return new Sync(props, false, true);
    }

    public static newInternal(props: I): Sync {
      return new Sync(props, false, false);
    }
  }
}
