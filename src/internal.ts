export interface IRenderable {
  render(): string;
}

export interface ITraceable {
  trace: string;
}

export interface IWritable {
  print(): string;
}
