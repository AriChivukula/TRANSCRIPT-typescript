export abstract class Renderable {
  public abstract render(ctx: IRenderContext): string;
}

export abstract class Composable extends Renderable {
  public abstract bespokeNames(): string[];
}

export interface IRenderContext {
  name: string;
  path: string;
}
