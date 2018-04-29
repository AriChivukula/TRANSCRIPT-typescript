export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract identifiers(): string[];

  public render(context: IContext): string {
    return this.renderImpl(context);
  }

  protected abstract renderImpl(context: IContext): string;
}
