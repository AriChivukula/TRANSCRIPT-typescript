import { Builder } from "./builder";

export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public print(
    context: IContext,
    builder?: Builder,
  ): string {
    this.verify(context);
    let localBuilder: Builder = Builder.new();
    if (builder !== undefined) {
      localBuilder = builder;
    }
    this.render(context, localBuilder);

    return localBuilder.print();
  }

  protected abstract render(
    context: IContext,
    builder: Builder,
  ): void;

  protected abstract verify(context: IContext): void;
}
