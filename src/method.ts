import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";

export enum EMethodKind {
  PRIVATE = "private",
  PROTECTED = "protected",
  PUBLIC = "public",
}

export interface IMethod {
  readonly content?: Renderable[];
  readonly inTypes: { [index: string]: string};
  readonly name: string;
  readonly outType: string;
}

export abstract class Method extends Renderable {

  protected constructor(
    private readonly props: IMethod,
    private readonly async: boolean,
    private readonly isStatic: boolean,
    private readonly kind: EMethodKind,
  ) {
    super();
  }

  public bespokes(): string[] {
    if (this.props.content === undefined) {
      return [];
    }
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
    builder.add(`${this.kind} `);
    if (this.isStatic) {
      builder.add("static ");
    }
    if (this.async) {
      builder.add("async ");
    }
    if (this.props.content === undefined) {
      builder.add("abstract ");
    }
    builder
      .addLine(`${this.props.name}(`)
      .indent();
    for (const name of Object.keys(this.props.inTypes)) {
      builder.addLine(`${name}: ${this.props.inTypes[name]},`);
    }
    builder
      .unindent()
      .add(`): ${this.props.outType}`);
    if (this.props.content === undefined) {
      builder.addLine(";");
    } else {
      builder
        .addLine(" {")
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
  }

  protected verify(context: IContext): void {
  }
}

export class PrivateMethod extends Method {

  public static newAsyncInstance(props: IMethod): PrivateMethod {
    return new PrivateMethod(props, true, false, EMethodKind.PRIVATE);
  }

  public static newAsyncStatic(props: IMethod): PrivateMethod {
    return new PrivateMethod(props, true, true, EMethodKind.PRIVATE);
  }

  public static newSyncInstance(props: IMethod): PrivateMethod {
    return new PrivateMethod(props, false, false, EMethodKind.PRIVATE);
  }

  public static newSyncStatic(props: IMethod): PrivateMethod {
    return new PrivateMethod(props, false, true, EMethodKind.PRIVATE);
  }
}

export class ProtectedMethod extends Method {

  public static newAsyncInstance(props: IMethod): ProtectedMethod {
    return new ProtectedMethod(props, true, false, EMethodKind.PROTECTED);
  }

  public static newAsyncStatic(props: IMethod): ProtectedMethod {
    return new ProtectedMethod(props, true, true, EMethodKind.PROTECTED);
  }

  public static newSyncInstance(props: IMethod): ProtectedMethod {
    return new ProtectedMethod(props, false, false, EMethodKind.PROTECTED);
  }

  public static newSyncStatic(props: IMethod): ProtectedMethod {
    return new ProtectedMethod(props, false, true, EMethodKind.PROTECTED);
  }
}

export class PublicMethod extends Method {

  public static newAsyncInstance(props: IMethod): PublicMethod {
    return new PublicMethod(props, true, false, EMethodKind.PUBLIC);
  }

  public static newAsyncStatic(props: IMethod): PublicMethod {
    return new PublicMethod(props, true, true, EMethodKind.PUBLIC);
  }

  public static newSyncInstance(props: IMethod): PublicMethod {
    return new PublicMethod(props, false, false, EMethodKind.PUBLIC);
  }

  public static newSyncStatic(props: IMethod): PublicMethod {
    return new PublicMethod(props, false, true, EMethodKind.PUBLIC);
  }
}
