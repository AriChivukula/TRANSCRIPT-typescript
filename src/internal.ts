export interface IContext {
  name: string;
  path: string;
}

export abstract class Renderable {

  public abstract bespokes(): string[];

  public abstract render(ctx: IContext): string;

  public abstract sortKey(): string;
}
