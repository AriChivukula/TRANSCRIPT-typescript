import { Builder } from "./builder";
import { IContext, NamedRenderer, TRenderer } from "./renderer";

export interface IClass {
  readonly content: TRenderer[];
  readonly extends?: string;
  readonly implements?: string[];
  readonly name: string;
  readonly templates?: string[];
}

export class Class extends NamedRenderer {

  public static newAbstractExported(props: IClass): Class {
    return new Class(props, true, true);
  }

  public static newAbstractInternal(props: IClass): Class {
    return new Class(props, true, false);
  }

  public static newConcreteExported(props: IClass): Class {
    return new Class(props, false, true);
  }

  public static newConcreteInternal(props: IClass): Class {
    return new Class(props, false, false);
  }

  private constructor(
    private readonly props: IClass,
    private readonly abstract: boolean,
    private readonly exported: boolean,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [...Class.genericBespokes(this.props.content)];
  }

  public identifiers(): string[] {
    return [...Class.genericIdentifiers(this.props.content), this.props.name];
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    if (this.exported) {
      builder.add("export ");
    }
    if (this.abstract) {
      builder.add("abstract ");
    }
    builder.add(`class ${this.props.name}`);
    if (this.props.templates !== undefined) {
      builder.add(`<${this.props.templates.join(", ")}>`);
    }
    builder.add(" ");
    if (this.props.extends !== undefined) {
      builder.add(`extends ${this.props.extends} `);
    }
    if (this.props.implements !== undefined) {
      builder.add(`implements ${this.props.implements.join(", ")} `);
    }
    builder
      .addThenNewline("{")
      .indent();
    this.props.content
      .forEach(
        (content: TRenderer): void => {
          builder.ensureOnNewlineAfterEmptyline();
          Class.genericRenderer(content)(context, builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
