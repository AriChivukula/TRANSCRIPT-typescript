import { Builder } from "./builder";

export interface IContext {
  readonly name: string;
  readonly path: string;
}

export abstract class Renderable {

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
