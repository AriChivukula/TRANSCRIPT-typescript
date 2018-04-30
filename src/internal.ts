export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public renderAndVerify(context: IContext): string {
    this.verify(context);

    return this.render(context);
  }

  protected abstract render(context: IContext): string;

  protected abstract verify(context: IContext): void;
}
