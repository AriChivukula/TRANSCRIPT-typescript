export interface IContext {
  name: string;
  path: string;
}

export interface IRenderable {

  bespokes(): string[];
  render(ctx: IContext): string;
  sortKey(): string;
}
