import { EVariableKind, IRenderable, IWritable, Module, Variable } from "../index";

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

export const emptyModule: IWritable = Module.new({
  content: [],
});

export const basicModule: IWritable = Module.new({
  content: [
    exportedVariable,
    immutableVariable,
    mutableVariable,
  ],
});
