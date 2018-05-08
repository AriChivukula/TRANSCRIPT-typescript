import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export interface IAlias {
  readonly name: string;
  readonly templates?: string[];
  readonly type: Type.Anonymous;
}

export class Alias extends Renderable {

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
    builder.add(`type ${this.props.name}`);
    if (this.props.templates !== undefined) {
      builder.add(`<${this.props.templates.join(", ")}>`);
    }
    builder.add(" = ");
    this.props.type.run(context, builder);
    builder.addLine(";");
  }

  protected verify(context: IContext): void {
  }
}
