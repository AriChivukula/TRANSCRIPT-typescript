import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export interface IClass {
  abstract: boolean;
  content: Renderable[];
  exported: boolean;
  extends?: string;
  implements?: string[];
  name: string;
}

export class Class extends Renderable {

  public static new(props: IClass): Class {
    return new Class(props);
  }

  private constructor(
    private readonly props: IClass,
  ) {
    super();
  }

  public bespokes(): string[] {
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
    if (this.props.exported) {
      builder.add("export ");
    }
    if (this.props.abstract) {
      builder.add("abstract ");
    }
    builder.add(`class ${this.props.name} `);
    if (this.props.extends !== undefined) {
      builder.add(`extends ${this.props.extends} `);
    }
    if (this.props.implements !== undefined) {
      builder.add(`implements ${this.props.implements.join(", ")} `);
    }
    builder
      .addLine("{")
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

  protected verify(context: IContext): void {
  }
}
