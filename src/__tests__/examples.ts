import {
  Alias,
  Bespoke,
  Class,
  Function,
  Import,
  Interface,
  Method,
  Module,
  PrivateInstanceProperty,
  PrivateStaticProperty,
  ProtectedInstanceProperty,
  ProtectedStaticProperty,
  PublicInstanceProperty,
  PublicStaticProperty,
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

export const function1: Function = Function.newSyncInternal({
  content: [],
  inTypes: [],
  name: "function1",
  outType: Type.Anonymous.new({ type: "void" }),
  templates: ["T"],
});

export const function2: Function = Function.newAsyncExported({
  content: [],
  inTypes: [],
  name: "function2",
  outType: Type.Anonymous.new({ type: "Promise<string>" }),
  templates: ["T", "V"],
});

export const function3: Function = Function.newAsyncExported({
  content: [
    Bespoke.new({
      name: "fn3",
    }),
  ],
  inTypes: [
    Type.Argument.new({ name: "var1", type: "string" }),
    Type.Argument.new({ name: "var2", type: "object", default: "{}" }),
  ],
  name: "function3",
  outType: Type.Anonymous.new({ type: "Promise<string[]>" }),
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
  templates: ["T"],
  types: [],
});

export const interface2: Interface = Interface.newExported({
  name: "If2",
  templates: ["T", "V"],
  types: [
    Type.Named.newRequired({ name: "item", type: "string" }),
  ],
});

export const interface3: Interface = Interface.newExported({
  name: "If3",
  types: [
    Type.Named.newRequired({ name: "test", types: ["null", "string"] }),
    Type.Named.newRequired({ name: "test2", type: "If2" }),
  ],
});

export const method1: Method.Public = Method.Public.newAsyncInstance({
  content: [],
  inTypes: [
    Type.Argument.new({ name: "var1", type: "string" }),
    Type.Argument.new({ name: "var2", type: "object", default: "{}" }),
  ],
  name: "method1",
  outType: Type.Anonymous.new({ type: "Promise<string[]>" }),
  templates: ["T"],
});

export const method2: Method.Protected = Method.Protected.newSyncStatic({
  inTypes: [],
  name: "method2",
  outType: Type.Anonymous.new({ type: "void" }),
  templates: ["T", "V"],
});

export const method3: Method.Private = Method.Private.newAsyncStatic({
  content: [
    Bespoke.new({
      name: "method3Bespoke",
    }),
  ],
  inTypes: [],
  name: "method3",
  outType: Type.Anonymous.new({ type: "void" }),
});

export const propertyInstance1: PublicInstanceProperty = PublicInstanceProperty.newMutable({
  assignment: "\"MYVAR\"",
  type: Type.Named.newRequired({ name: "propertyInstance1", type: "string" }),
});

export const propertyInstance2: ProtectedInstanceProperty = ProtectedInstanceProperty.newImmutable({
  type: Type.Named.newRequired({ name: "propertyInstance2", type: "number" }),
});

export const propertyInstance3: PrivateInstanceProperty = PrivateInstanceProperty.newMutable({
  type: Type.Named.newRequired({ name: "propertyInstance3", types: ["string", "null"] }),
});

export const propertyStatic1: PublicStaticProperty = PublicStaticProperty.newMutable({
  assignment: "\"MYVAR\"",
  type: Type.Named.newRequired({ name: "propertyStatic1", type: "string" }),
});

export const propertyStatic2: ProtectedStaticProperty = ProtectedStaticProperty.newImmutable({
  type: Type.Named.newRequired({ name: "propertyStatic2", type: "number" }),
});

export const propertyStatic3: PrivateStaticProperty = PrivateStaticProperty.newMutable({
  type: Type.Named.newRequired({ name: "propertyStatic3", types: ["string", "null"] }),
});

export const alias1: Alias = Alias.newInternal({
  name: "Ty1",
  templates: ["T"],
  type: Type.Anonymous.new({ type: "number" }),
});

export const alias2: Alias = Alias.newExported({
  name: "Ty2",
  templates: ["T", "V"],
  type: Type.Anonymous.new({ types: ["string", "null"] }),
});

export const alias3: Alias = Alias.newExported({
  name: "Ty3",
  type: Type.Anonymous.new({ types: ["Ty2", "Ty1"] }),
});

export const type1: Type.Named = Type.Named.newOptional({
  name: "test1",
  type: "string",
});

export const type2: Type.Named = Type.Named.newRequired({
  name: "test1",
  types: ["string", "number"],
});

export const type3: Type.Anonymous = Type.Anonymous.new({
  type: "number",
});

export const variable1: Variable = Variable.newExported({
  type: Type.Named.newRequired({ name: "variable1", type: "string" }),
});

export const variable2: Variable = Variable.newImmutable({
  assignment: "\"TEST\"",
  type: Type.Named.newRequired({ name: "variable2", types: ["string", "undefined"] }),
});

export const variable3: Variable = Variable.newMutable({
  assignment: "1",
  type: Type.Named.newRequired({ name: "variable3", types: ["number", "null", "undefined"] }),
});

export const emptyModule: Module = Module.new({
  content: [],
  destination: "src/__tests__/__codegen__/emptyModule.ts",
});

export const class1: Class = Class.newAbstractExported({
  content: [
    propertyInstance1,
    propertyStatic1,
    method1,
  ],
  name: "MyClass1",
  templates: ["T"],
});

export const class2: Class = Class.newConcreteExported({
  content: [
    bespoke1,
    propertyInstance2,
    propertyStatic2,
    method2,
  ],
  extends: "MyClass1",
  name: "MyClass2",
  templates: ["T", "V"],
});

export const class3: Class = Class.newConcreteInternal({
  content: [
    propertyInstance3,
    propertyStatic3,
    method3,
  ],
  extends: "MyClass1",
  implements: ["MyInterface1", "MyInterface2"],
  name: "MyClass3",
});

export const contentModule: Module = Module.new({
  content: [
    class1,
    alias1,
    bespoke1,
    interface1,
    function1,
    variable1,
    alias2,
    function2,
    interface3,
    variable2,
    variable3,
    bespoke2,
    function3,
    interface2,
    alias3,
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
    alias1,
    alias2,
    alias3,
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
