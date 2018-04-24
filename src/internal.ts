export enum VariableState {
  EXPORTED,
  IMMUTABLE,
  MUTABLE,
}

export interface IRenderable {
  render(): string;
}

export interface IWritable {
  content(): IRenderable[];
  print(): string;
}
