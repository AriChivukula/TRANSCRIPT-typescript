export abstract class Renderable {
  public abstract render(ctx: IRenderContext): string;
}

export abstract class Composable extends Renderable {}

export interface IRenderContext {
  name: string;
  path: string;
}
