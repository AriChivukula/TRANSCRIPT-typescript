import { Builder } from "./builder";
import { NamedRenderer } from "./renderer";
import { Type } from "./type";

export interface IAlias {
  readonly name: string;
  readonly templates?: string[];
  readonly type: Type.Anonymous;
}

export class Alias extends NamedRenderer {

  public static newExported(props: IAlias): Alias {
    return new Alias(props, true);
  }

  public static newInternal(props: IAlias): Alias {
    return new Alias(props, false);
  }

  private constructor(
    private readonly props: IAlias,
    private readonly exported: boolean,
  ) {
    super();
  }

  protected render(builder: Builder): void {
    builder.withIdentifiers(this.props.name);
    if (this.exported) {
      builder.add("export ");
    }
    builder.add(`type ${this.props.name}`);
    if (this.props.templates !== undefined) {
      builder.add(`<${this.props.templates.join(", ")}>`);
    }
    builder.add(" = ");
    this.props.type.run(builder);
    builder.addThenNewline(";");
  }

  protected verify(builder: Builder): void {
  }
}
