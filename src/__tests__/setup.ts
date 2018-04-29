import {
  Bespoke,
  Composable,
  EVariableKind,
  Function,
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

export const function1: Composable = Function.new({
  async: false,
  content: [],
  exported: false,
  inputs: {},
  name: "function1",
  output: "void",
});

export const function2: Composable = Function.new({
  async: true,
  content: [],
  exported: true,
  inputs: {},
  name: "function2",
  output: "Promise<string>",
});

export const function3: Composable = Function.new({
  async: true,
  content: [
    Bespoke.new({
      name: "fn1",
    }),
  ],
  exported: true,
  inputs: {
    var1: "string",
    var2: "object",
  },
  name: "function2",
  output: "Promise<string[]>",
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

export const importRaw1: Import = Import.new({
  module: "ZZZ",
});

export const importRaw2: Import = Import.new({
  module: "./p",
});

export const importRaw3: Import = Import.new({
  module: "aqe",
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
  name: "mutableVariable",
  type: "number | null | undefined",
});

export const emptyModule: Renderable = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
  imports: [],
});

export const contentModule: Renderable = Module.new({
  content: [
    bespoke1,
    function1,
    exportedVariable,
    function2,
    immutableVariable,
    mutableVariable,
    bespoke2,
    function3,
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
    importRaw1,
    importRaw2,
    importRaw3,
    importSome1,
    importSome2,
    importSome3,
  ],
});

export const complexModule: Renderable = Module.new({
  content: [
    function3,
    bespoke1,
    bespoke2,
    mutableVariable,
    function2,
    exportedVariable,
    bespoke3,
    immutableVariable,
    function1,
  ],
  destination: "src/__tests__/__codegen__/complexModule.ts",
  imports: [
    importRaw1,
    importSome3,
    importSome2,
    importSome1,
    importDefault3,
    importDefault2,
    importDefault1,
    importAll3,
    importRaw2,
    importRaw3,
    importAll2,
    importAll1,
  ],
});
