import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";

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

  protected render(builder: Builder): void {
    builder.withIdentifiers(this.props.name);
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

  protected verify(builder: Builder): void {
  }
}
