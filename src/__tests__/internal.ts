import { EVariableKind, IRenderable, Module, Variable } from "../index";

export const exportedVariable: IRenderable = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  types: ["string"],
});

export const immutableVariable: IRenderable = Variable.new({
  assignment: "TEST",
  kind: EVariableKind.IMMUTABLE,
  name: "immutableVariable",
  types: ["string", "undefined"],
});

export const mutableVariable: IRenderable = Variable.new({
  assignment: "1",
  kind: EVariableKind.MUTABLE,
  name: "immutableVariable",
  types: ["number", "null"],
});

export class EmptyModule extends Module {

  public content(): IRenderable[] {
		return [];
	}
}

export class BasicModule extends Module {

  public content(): IRenderable[] {
		return [
      exportedVariable,
      immutableVariable,
      mutableVariable,
    ];
	}
}
