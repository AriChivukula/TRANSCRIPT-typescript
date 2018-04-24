import { IRenderable, TSModule, TSVariable, VariableState } from "../index";

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
  public name: string = "complexTest";
  public state: VariableState = VariableState.MUTABLE;
  public types: string[] = ["string", "null"];
}
