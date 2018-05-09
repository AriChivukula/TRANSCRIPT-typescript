import { Builder } from "./builder";

export interface IContext {
  readonly name: string;
  readonly path: string;
}

export type AnonymousRenderer = (context: IContext, builder: Builder) => void;

export abstract class NamedRenderer {

  protected static genericBespokes(renderers: TRenderer[]): string[] {
    return ([] as string[]).concat(
      ...renderers
        .map(
          (renderer: TRenderer): string[] => {
            if (renderer instanceof NamedRenderer) {
              return renderer.bespokes();
            } else {
              return [];
            }
          },
        ),
    );
  }

  protected static genericIdentifiers(renderers: TRenderer[]): string[] {
    return ([] as string[]).concat(
      ...renderers
        .map(
          (renderer: TRenderer): string[] => {
            if (renderer instanceof NamedRenderer) {
              return renderer.identifiers();
            } else {
              return [];
            }
          },
        ),
    );
  }

  protected static genericRenderer(renderer: TRenderer): AnonymousRenderer {
    if (renderer instanceof NamedRenderer) {
      return (context: IContext, builder: Builder): void => {
        renderer.run(context, builder);
      };
    } else {
      return renderer;
    }
  }

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public print(
    context: IContext,
  ): string {
    const builder: Builder = Builder.new();
    this.run(context, builder);

    return builder.print();
  }

  public run(
    context: IContext,
    builder: Builder,
  ): void {
    this.verify(context);
    this.render(context, builder);
  }

  protected abstract render(
    context: IContext,
    builder: Builder,
  ): void;

  protected abstract verify(context: IContext): void;
}

export type TRenderer = AnonymousRenderer | NamedRenderer;
