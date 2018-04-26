import {
  Bespoke,
  Composable,
  EVariableKind,
  Import,
  Module,
  Renderable,
  Variable,
} from "../index";

export const bespoke1: Composable = Bespoke.new({
  name: "TEST1",
});

export const bespoke2: Composable = Bespoke.new({
  name: "test2",
});

export const bespoke3: Composable = Bespoke.new({
  name: "3tESt3",
});

export const importAll1: Import = Import.new({
  module: "YYY",
  nameAll: "zzz",
});

export const importAll2: Import = Import.new({
  module: "BbB",
  nameAll: "aaa",
});

export const importAll3: Import = Import.new({
  module: "./mmm",
  nameAll: "mmm",
});

export const importDefault1: Import = Import.new({
  module: "www",
  nameDefault: "xxx",
});

export const importDefault2: Import = Import.new({
  module: "./ddd",
  nameDefault: "fff",
});

export const importDefault3: Import = Import.new({
  module: "nnn",
  nameDefault: "ooo",
});

export const importSome1: Import = Import.new({
  module: "a",
  names: ["B", "c"],
});

export const importSome2: Import = Import.new({
  module: "./R",
  names: ["wA", "A"],
});

export const importSome3: Import = Import.new({
  module: "./a",
  names: ["g", "z", "r"],
});

export const exportedVariable: Composable = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  type: "string",
});

export const immutableVariable: Composable = Variable.new({
  assignment: "\"TEST\"",
  kind: EVariableKind.IMMUTABLE,
  name: "immutableVariable",
  type: "string | undefined",
});

export const mutableVariable: Composable = Variable.new({
  assignment: "1",
  kind: EVariableKind.MUTABLE,
  name: "immutableVariable",
  type: "number | null | undefined",
});

export const emptyModule: Renderable = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
  imports: [],
});

export const contentModule: Renderable = Module.new({
  content: [
    exportedVariable,
    immutableVariable,
    mutableVariable,
  ],
  destination: "src/__tests__/__codegen__/contentModule.ts",
  imports: [],
});

export const importModule: Renderable = Module.new({
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

export const complexModule: Renderable = Module.new({
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
