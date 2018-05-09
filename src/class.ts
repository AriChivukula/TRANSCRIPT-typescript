import { Builder } from "./builder";
import { Method } from "./method";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export interface IClassConstructor {
  readonly abstract: boolean;
  readonly inTypes?: Array<Type.Argument | Type.FromProperty>;
  readonly kind: Method.EKind;
}

export interface IClass {
  readonly classConstructor?: IClassConstructor;
  readonly content: Renderable[];
  readonly extends?: string;
  readonly implements?: string[];
  readonly name: string;
  readonly templates?: string[];
}

export class Class extends Renderable {

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
    const bespokes: string[][] = this.props.content
      .map((content: Renderable) => content.bespokes());

    return ([] as string[]).concat(...bespokes);
  }

  public identifiers(): string[] {
    const identifiers: string[][] = this.props.content
      .map(
        (content: Renderable) => content.identifiers(),
      );

    return ([] as string[]).concat(...identifiers, [this.props.name]);
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
        (content: Renderable): void => {
          builder.ensureOnNewlineAfterEmptyline();
          content.run(context, builder);
        },
      );
    builder
      .unindent()
      .addThenNewline("}");
  }

  protected verify(context: IContext): void {
  }
}
