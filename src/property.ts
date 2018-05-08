import { Builder } from "./builder";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

export enum EPropertyKind {
  PRIVATE = "private",
  PROTECTED = "protected",
  PUBLIC = "public",
}

export interface IProperty {
  readonly assignment?: string;
  readonly type: Type.Named;
}

export abstract class Property extends Renderable {

  protected constructor(
    private readonly props: IProperty,
    private readonly readonly: boolean,
    private readonly isStatic: boolean,
    private readonly kind: EPropertyKind,
  ) {
    super();
  }

  public bespokes(): string[] {
    return [];
  }

  public identifiers(): string[] {
    return this.props.type.identifiers();
  }

  protected render(
    context: IContext,
    builder: Builder,
  ): void {
    builder.add(`${this.kind} `);
    if (this.readonly) {
      builder.add("readonly ");
    }
    if (this.isStatic) {
      builder.add("static ");
    }
    this.props.type.run(context, builder);
    if (this.props.assignment !== undefined) {
      builder.addLine(` = ${this.props.assignment};`);
    } else {
      builder.addLine(";");
    }
  }

  protected verify(context: IContext): void {
  }
}

export class PrivateInstanceProperty extends Property {

  public static newImmutable(props: IProperty): PrivateInstanceProperty {
    return new PrivateInstanceProperty(props, true, false, EPropertyKind.PRIVATE);
  }

  public static newMutable(props: IProperty): PrivateInstanceProperty {
    return new PrivateInstanceProperty(props, false, false, EPropertyKind.PRIVATE);
  }
}

export class ProtectedInstanceProperty extends Property {

  public static newImmutable(props: IProperty): ProtectedInstanceProperty {
    return new ProtectedInstanceProperty(props, true, false, EPropertyKind.PROTECTED);
  }

  public static newMutable(props: IProperty): ProtectedInstanceProperty {
    return new ProtectedInstanceProperty(props, false, false, EPropertyKind.PROTECTED);
  }
}

export class PublicInstanceProperty extends Property {

  public static newImmutable(props: IProperty): PublicInstanceProperty {
    return new PublicInstanceProperty(props, true, false, EPropertyKind.PUBLIC);
  }

  public static newMutable(props: IProperty): PublicInstanceProperty {
    return new PublicInstanceProperty(props, false, false, EPropertyKind.PUBLIC);
  }
}

export class PrivateStaticProperty extends Property {

  public static newImmutable(props: IProperty): PrivateStaticProperty {
    return new PrivateStaticProperty(props, true, true, EPropertyKind.PRIVATE);
  }

  public static newMutable(props: IProperty): PrivateStaticProperty {
    return new PrivateStaticProperty(props, false, true, EPropertyKind.PRIVATE);
  }
}

export class ProtectedStaticProperty extends Property {

  public static newImmutable(props: IProperty): ProtectedStaticProperty {
    return new ProtectedStaticProperty(props, true, true, EPropertyKind.PROTECTED);
  }

  public static newMutable(props: IProperty): ProtectedStaticProperty {
    return new ProtectedStaticProperty(props, false, true, EPropertyKind.PROTECTED);
  }
}

export class PublicStaticProperty extends Property {

  public static newImmutable(props: IProperty): PublicStaticProperty {
    return new PublicStaticProperty(props, true, true, EPropertyKind.PUBLIC);
  }

  public static newMutable(props: IProperty): PublicStaticProperty {
    return new PublicStaticProperty(props, false, true, EPropertyKind.PUBLIC);
  }
}
