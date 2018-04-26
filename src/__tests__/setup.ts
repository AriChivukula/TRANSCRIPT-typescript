import {
  EVariableKind,
  Import,
  IRenderable,
  Module,
  Variable,
} from "../index";

export const importAll1: IRenderable<Import> = Import.new({
  module: "YYY",
  nameAll: "zzz",
});

export const importAll2: IRenderable<Import> = Import.new({
  module: "BbB",
  nameAll: "aaa",
});

export const importAll3: IRenderable<Import> = Import.new({
  module: "./mmm",
  nameAll: "mmm",
});

export const importDefault1: IRenderable<Import> = Import.new({
  module: "www",
  nameDefault: "xxx",
});

export const importDefault2: IRenderable<Import> = Import.new({
  module: "./ddd",
  nameDefault: "fff",
});

export const importDefault3: IRenderable<Import> = Import.new({
  module: "nnn",
  nameDefault: "ooo",
});

export const importSome1: IRenderable<Import> = Import.new({
  module: "a",
  names: ["B", "c"],
});

export const importSome2: IRenderable<Import> = Import.new({
  module: "./R",
  names: ["wA", "A"],
});

export const importSome3: IRenderable<Import> = Import.new({
  module: "./a",
  names: ["g", "z", "r"],
});

export const exportedVariable: IRenderable<Variable> = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  type: "string",
});

export const immutableVariable: IRenderable<Variable> = Variable.new({
  assignment: "\"TEST\"",
  kind: EVariableKind.IMMUTABLE,
  name: "immutableVariable",
  type: "string | undefined",
});

export const mutableVariable: IRenderable<Variable> = Variable.new({
  assignment: "1",
  kind: EVariableKind.MUTABLE,
  name: "immutableVariable",
  type: "number | null | undefined",
});

export const emptyModule: IRenderable<Module> = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
  imports: [],
});

export const contentModule: IRenderable<Module> = Module.new({
  content: [
    exportedVariable,
    immutableVariable,
    mutableVariable,
  ],
  destination: "src/__tests__/__codegen__/contentModule.ts",
  imports: [],
});

export const importModule: IRenderable<Module> = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/importModule.ts",
  imports: [
    importAll1,
    importAll2,
    importAll3,
    importDefault1,
    importDefault2,
    importDefault3,
    importSome1,
    importSome2,
    importSome3,
  ],
});

export const complexModule: IRenderable<Module> = Module.new({
  content: [
    mutableVariable,
    exportedVariable,
    immutableVariable,
  ],
  destination: "src/__tests__/__codegen__/complexModule.ts",
  imports: [
    importSome3,
    importSome2,
    importSome1,
    importDefault3,
    importDefault2,
    importDefault1,
    importAll3,
    importAll2,
    importAll1,
  ],
});
