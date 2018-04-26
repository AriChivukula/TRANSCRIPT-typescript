export abstract class Composable {}

export interface IRenderable<T> {
  render(ctx: IRenderContext): string;
}

export interface IRenderContext {
  name: string;
  path: string;
}
