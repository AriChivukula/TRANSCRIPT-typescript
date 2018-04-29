import {
  Bespoke,
  EVariableKind,
  Function,
  Import,
  Interface,
  Module,
  Type,
  Variable,
} from "../index";

export const bespoke1: Bespoke = Bespoke.new({
  name: "TEST1",
});

export const bespoke2: Bespoke = Bespoke.new({
  name: "test2",
});

export const bespoke3: Bespoke = Bespoke.new({
  name: "3tESt3",
});

export const function1: Function = Function.new({
  async: false,
  content: [],
  exported: false,
  inputs: {},
  name: "function1",
  output: "void",
});

export const function2: Function = Function.new({
  async: true,
  content: [],
  exported: true,
  inputs: {},
  name: "function2",
  output: "Promise<string>",
});

export const function3: Function = Function.new({
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

export const interface1: Interface = Interface.new({
  exported: false,
  name: "If1",
  types: {},
});

export const interface2: Interface = Interface.new({
  exported: true,
  name: "If2",
  types: {
    item: "string",
  },
});

export const interface3: Interface = Interface.new({
  exported: true,
  name: "If3",
  types: {
    test: "null | string",
    test2: "If2",
  },
});

export const type1: Type = Type.new({
  assignment: "number",
  exported: false,
  name: "Ty1",
});

export const type2: Type = Type.new({
  assignment: "string | null",
  exported: true,
  name: "Ty2",
});

export const type3: Type = Type.new({
  assignment: "Ty2 | Ty1",
  exported: true,
  name: "Ty3",
});

export const exportedVariable: Variable = Variable.new({
  kind: EVariableKind.EXPORTED,
  name: "exportedVariable",
  type: "string",
});

export const immutableVariable: Variable = Variable.new({
  assignment: "\"TEST\"",
  kind: EVariableKind.IMMUTABLE,
  name: "immutableVariable",
  type: "string | undefined",
});

export const mutableVariable: Variable = Variable.new({
  assignment: "1",
  kind: EVariableKind.MUTABLE,
  name: "mutableVariable",
  type: "number | null | undefined",
});

export const emptyModule: Module = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
});

export const contentModule: Module = Module.new({
  content: [
    type1,
    bespoke1,
    interface1,
    function1,
    exportedVariable,
    type2,
    function2,
    interface3,
    immutableVariable,
    mutableVariable,
    bespoke2,
    function3,
    interface2,
    type3,
  ],
  destination: "src/__tests__/__codegen__/contentModule.ts",
});

export const importModule: Module = Module.new({
  content: [
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
  destination: "src/__tests__/__codegen__/importModule.ts",
});

export const complexModule: Module = Module.new({
  content: [
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
    interface1,
    function3,
    bespoke1,
    bespoke2,
    mutableVariable,
    interface2,
    type1,
    type2,
    type3,
    function2,
    exportedVariable,
    bespoke3,
    immutableVariable,
    interface3,
    function1,
  ],
  destination: "src/__tests__/__codegen__/complexModule.ts",
});
