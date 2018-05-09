import { Builder } from "./builder";
import { IContext, NamedRenderer } from "./renderer";

export interface IEnum {
  readonly name: string;
  readonly values: { [index: string]: string | number };
}

export class Enum extends NamedRenderer {

  public static newExported(props: IEnum): Enum {
    return new Enum(props, true);
  }

  public static newInternal(props: IEnum): Enum {
    return new Enum(props, false);
  }

  private constructor(
    private readonly props: IEnum,
    private readonly exported: boolean,
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
    if (this.exported) {
      builder.add("export ");
    }
    builder
      .addThenNewline(`enum ${this.props.name} {`)
      .indent();
    for (const key of Object.keys(this.props.values)) {
      builder.add(`${key} = `);
      if (typeof this.props.values[key] === "string") {
        builder.addThenNewline(`"${this.props.values[key]}",`);
      } else {
        builder.addThenNewline(`${this.props.values[key]},`);
      }
    }
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
