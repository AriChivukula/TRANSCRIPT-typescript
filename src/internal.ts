export interface IExportable {
  isExported: boolean;
}

export interface IRenderable {
  render(): string;
}

export interface IWritable {
  breadcrumb(): string;
  print(): string;
}
