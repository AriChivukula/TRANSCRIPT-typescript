import { EVariableKind, IRenderable, Module, Variable } from "../index";

export const exportedVariable: IRenderable = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  types: ["string"],
});

export const immutableVariable: IRenderable = Variable.new({
  assignment: "\"TEST\"",
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

export const emptyModule: Module = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
});

export const basicModule: Module = Module.new({
  content: [
    exportedVariable,
    immutableVariable,
    mutableVariable,
  ],
  destination: "src/__tests__/__codegen__/basicModule.ts",
});
