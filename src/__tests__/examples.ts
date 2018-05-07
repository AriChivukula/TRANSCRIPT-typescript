import {
  Bespoke,
  Class,
  Function,
  Import,
  Interface,
  Module,
  PrivateMethod,
  PrivateProperty,
  ProtectedMethod,
  ProtectedProperty,
  PublicMethod,
  PublicProperty,
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
      name: "fn3",
    }),
  ],
  exported: true,
  inputs: {
    var1: "string",
    var2: "object",
  },
  name: "function3",
  output: "Promise<string[]>",
});

export const importAll1: Import = Import.new({
  name: "YYY",
  withAllAs: "zzz",
});

export const importAll2: Import = Import.new({
  name: "BbB",
  withAllAs: "aaa",
});

export const importAll3: Import = Import.new({
  name: "./mmm",
  withAllAs: "mmm",
});

export const importDefault1: Import = Import.new({
  name: "www",
  withDefaultAs: "xxx",
});

export const importDefault2: Import = Import.new({
  name: "./ddd",
  withDefaultAs: "fff",
});

export const importDefault3: Import = Import.new({
  name: "nnn",
  withDefaultAs: "ooo",
});

export const importRaw1: Import = Import.new({
  name: "ZZZ",
});

export const importRaw2: Import = Import.new({
  name: "./p",
});

export const importRaw3: Import = Import.new({
  name: "aqe",
});

export const importSome1: Import = Import.new({
  name: "a",
  with: ["B", "c"],
});

export const importSome2: Import = Import.new({
  name: "./R",
  with: ["wA", "A"],
});

export const importSome3: Import = Import.new({
  name: "./a",
  with: ["g", "z", "r"],
});

export const interface1: Interface = Interface.newInternal({
  name: "If1",
  types: {},
});

export const interface2: Interface = Interface.newExported({
  name: "If2",
  types: {
    item: "string",
  },
});

export const interface3: Interface = Interface.newExported({
  name: "If3",
  types: {
    test: "null | string",
    test2: "If2",
  },
});

export const method1: PublicMethod = PublicMethod.newAsyncInstance({
  content: [],
  inputs: {
    var1: "string",
    var2: "object",
  },
  name: "method1",
  output: "Promise<string[]>",
});

export const method2: ProtectedMethod = ProtectedMethod.newSyncStatic({
  inputs: {},
  name: "method2",
  output: "void",
});

export const method3: PrivateMethod = PrivateMethod.newAsyncStatic({
  content: [
    Bespoke.new({
      name: "method3Bespoke",
    }),
  ],
  inputs: {},
  name: "method3",
  output: "void",
});

export const property1: PublicProperty = PublicProperty.newMutableInstance({
  assignment: "\"MYVAR\"",
  name: "property1",
  type: "string",
});

export const property2: ProtectedProperty = ProtectedProperty.newImmutableInstance({
  name: "property2",
  type: "number",
});

export const property3: PrivateProperty = PrivateProperty.newMutableStatic({
  name: "property3",
  type: "string | null",
});

export const type1: Type = Type.newInternal({
  assignment: "number",
  name: "Ty1",
});

export const type2: Type = Type.newExported({
  assignment: "string | null",
  name: "Ty2",
});

export const type3: Type = Type.newExported({
  assignment: "Ty2 | Ty1",
  name: "Ty3",
});

export const variable1: Variable = Variable.newExported({
  name: "variable1",
  type: "string",
});

export const variable2: Variable = Variable.newImmutable({
  assignment: "\"TEST\"",
  name: "variable2",
  type: "string | undefined",
});

export const variable3: Variable = Variable.newMutable({
  assignment: "1",
  name: "variable3",
  type: "number | null | undefined",
});

export const emptyModule: Module = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
});

export const class1: Class = Class.new({
  abstract: true,
  content: [
    property1,
    method1,
  ],
  exported: true,
  name: "MyClass1",
});

export const class2: Class = Class.new({
  abstract: false,
  content: [
    bespoke1,
    property2,
    method2,
  ],
  exported: true,
  extends: "MyClass1",
  name: "MyClass2",
});

export const class3: Class = Class.new({
  abstract: false,
  content: [
    property3,
    method3,
  ],
  exported: false,
  extends: "MyClass1",
  implements: ["MyInterface1", "MyInterface2"],
  name: "MyClass3",
});

export const contentModule: Module = Module.new({
  content: [
    class1,
    type1,
    bespoke1,
    interface1,
    function1,
    variable1,
    type2,
    function2,
    interface3,
    variable2,
    variable3,
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
    class2,
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
    variable3,
    interface2,
    type1,
    type2,
    type3,
    class3,
    function2,
    variable1,
    bespoke3,
    variable2,
    interface3,
    function1,
  ],
  destination: "src/__tests__/__codegen__/complexModule.ts",
});
