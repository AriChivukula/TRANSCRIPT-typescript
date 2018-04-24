import { IRenderable, TSModule, TSVariable } from "../index";

export class EmptyModule extends TSModule {

  public content(): IRenderable[] {
		return [];
	}
}

export class BasicModule extends TSModule {

  public content(): IRenderable[] {
		return [
      new BasicVariable(),
      new ComplexVariable(),
    ];
	}
}

export class BasicVariable extends TSVariable {

	public types: string[] = ["string"];
	public name: string = "basicTest";
}

export class ComplexVariable extends TSVariable {

  public default: string | undefined = "\"complex test\"";
  public isExported: boolean = true;
  public isMutable: boolean = true;
  public name: string = "complexTest";
  public types: string[] = ["string", "null"];
}
