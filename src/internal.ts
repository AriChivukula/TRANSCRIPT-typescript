export enum EVariableKind {
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
