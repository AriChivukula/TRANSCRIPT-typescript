import {
  EVariableKind,
  IImportAll,
  IImportDefault,
  IImportSome,
  IRenderable,
  Module,
  Variable,
} from "../index";

const importAll1: IImportAll = {
  module: "YYY",
  nameAll: "zzz",
};

const importAll2: IImportAll = {
  module: "BbB",
  nameAll: "aaa",
};

const importAll3: IImportAll = {
  module: "./mmm",
  nameAll: "mmm",
};

const importDefault1: IImportDefault = {
  module: "www",
  nameDefault: "xxx",
};

const importDefault2: IImportDefault = {
  module: "./ddd",
  nameDefault: "fff",
};

const importDefault3: IImportDefault = {
  module: "nnn",
  nameDefault: "ooo",
};

const importSome1: IImportSome = {
  module: "a",
  names: ["B", "c"],
};

const importSome2: IImportSome = {
  module: "./R",
  names: ["wA", "A"],
};

const importSome3: IImportSome = {
  module: "./a",
  names: ["g", "z", "r"],
};

export const exportedVariable: IRenderable = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  type: "string",
});

export const immutableVariable: IRenderable = Variable.new({
  assignment: "\"TEST\"",
  kind: EVariableKind.IMMUTABLE,
  name: "immutableVariable",
  type: "string | undefined",
});

export const mutableVariable: IRenderable = Variable.new({
  assignment: "1",
  kind: EVariableKind.MUTABLE,
  name: "immutableVariable",
  type: "number | null | undefined",
});

export const emptyModule: Module = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
  imports: [],
});

export const contentModule: Module = Module.new({
  content: [
    exportedVariable,
    immutableVariable,
    mutableVariable,
  ],
  destination: "src/__tests__/__codegen__/basicModule.ts",
  imports: [],
});

export const importModule: Module = Module.new({
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

export const complexModule: Module = Module.new({
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
