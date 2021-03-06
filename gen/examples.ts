import {
  Alias,
  Bespoke,
  Class,
  Enum,
  Function,
  Import,
  Interface,
  Method,
  Namespace,
  Primitive,
  Property,
  Type,
  Variable,
} from "../src/index";

export const primitiveAny: string = Primitive.ANY;

export const primitiveBoolean: string = Primitive.BOOLEAN;

export const primitiveNever: string = Primitive.NEVER;

export const primitiveNull: string = Primitive.NULL;

export const primitiveNumber: string = Primitive.NUMBER;

export const primitiveString: string = Primitive.STRING;

export const primitiveUndefined: string = Primitive.UNDEFINED;

export const primitiveVoid: string = Primitive.VOID;

export const bespoke1: Bespoke = Bespoke.new({
  name: "TEST1",
});

export const bespoke2: Bespoke = Bespoke.new({
  name: "test2",
});

export const bespoke3: Bespoke = Bespoke.new({
  name: "3tESt3",
});

export const function1: Function.Sync = Function.Sync.newInternal({
  content: [],
  inTypes: [],
  name: "function1",
  outType: Type.Anonymous.new({ type: "void" }),
  templates: ["T"],
});

export const function2: Function.Async = Function.Async.newExported({
  content: [],
  inTypes: [],
  name: "function2",
  outType: Type.Anonymous.new({ type: "Promise<string>" }),
  templates: ["T", "V"],
});

export const function3: Function.Async = Function.Async.newExported({
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

export const type6: Type.FromMethod = Type.FromMethod.new({
  method: Method.Instance.Public.newAsync({
    inTypes: [
      Type.Argument.new({ name: "var1", type: "string" }),
      Type.Argument.new({ name: "var2", type: "object" }),
    ],
    name: "methodInstance6",
    outType: Type.Anonymous.new({ type: "Promise<string[]>" }),
    templates: ["T"],
  }),
});

export const interface1: Interface = Interface.newInternal({
  kind: "IF1",
  name: "If1",
  templates: ["T"],
  types: [type6],
});

export const interface2: Interface = Interface.newExported({
  extends: ["interface1"],
  name: "If2",
  templates: ["T", "V"],
  types: [
    Type.Required.new({ name: "item", type: "string" }),
  ],
});

export const interface3: Interface = Interface.newExported({
  extends: ["interface1", "interface2"],
  name: "If3",
  types: [
    Type.Required.new({ name: "test", types: ["null", "string"] }),
    Type.Required.new({ name: "test2", type: "If2" }),
  ],
});

export const methodInstance1: Method.Instance.Public = Method.Instance.Public.newAsync({
  content: [],
  inTypes: [
    Type.Argument.new({ name: "var1", type: "string" }),
    Type.Argument.new({ name: "var2", type: "object", default: "{}" }),
  ],
  name: "methodInstance1",
  outType: Type.Anonymous.new({ type: "Promise<string[]>" }),
  templates: ["T"],
});

export const methodInstance2: Method.Instance.Protected = Method.Instance.Protected.newSync({
  inTypes: [],
  name: "methodInstance2",
  outType: Type.Anonymous.new({ type: "void" }),
  templates: ["T", "V"],
});

export const methodInstance3: Method.Instance.Private = Method.Instance.Private.newAsync({
  content: [
    Bespoke.new({
      name: "methodInstance3Bespoke",
    }),
  ],
  inTypes: [],
  name: "methodInstance3",
  outType: Type.Anonymous.new({ type: "void" }),
});

export const methodStatic1: Method.Static.Public = Method.Static.Public.newAsync({
  content: [],
  inTypes: [
    Type.Argument.new({ name: "var1", type: "string" }),
    Type.Argument.new({ name: "var2", type: "object", default: "{}" }),
  ],
  name: "methodStatic1",
  outType: Type.Anonymous.new({ type: "Promise<string[]>" }),
  templates: ["T"],
});

export const methodStatic2: Method.Static.Protected = Method.Static.Protected.newSync({
  inTypes: [],
  name: "methodStatic2",
  outType: Type.Anonymous.new({ type: "void" }),
  templates: ["T", "V"],
});

export const methodStatic3: Method.Static.Private = Method.Static.Private.newAsync({
  content: [
    Bespoke.new({
      name: "methodStatic3Bespoke",
    }),
  ],
  inTypes: [],
  name: "methodStatic3",
  outType: Type.Anonymous.new({ type: "void" }),
});

export const propertyInstance1: Property.Instance.Public = Property.Instance.Public.newMutable({
  assignment: "\"MYVAR\"",
  type: Type.Required.new({ name: "propertyInstance1", type: "string" }),
});

export const propertyInstance2: Property.Instance.Protected = Property.Instance.Protected.newImmutable({
  type: Type.Required.new({ name: "propertyInstance2", type: "number" }),
});

export const propertyInstance3: Property.Instance.Private = Property.Instance.Private.newMutable({
  type: Type.Required.new({ name: "propertyInstance3", types: ["string", "null"] }),
});

export const propertyStatic1: Property.Static.Public = Property.Static.Public.newMutable({
  assignment: "\"MYVAR\"",
  type: Type.Required.new({ name: "propertyStatic1", type: "string" }),
});

export const propertyStatic2: Property.Static.Protected = Property.Static.Protected.newImmutable({
  type: Type.Required.new({ name: "propertyStatic2", type: "number" }),
});

export const propertyStatic3: Property.Static.Private = Property.Static.Private.newMutable({
  type: Type.Required.new({ name: "propertyStatic3", types: ["string", "null"] }),
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

export const type1: Type.Optional = Type.Optional.new({
  name: "test1",
  type: "string",
});

export const type2: Type.Required = Type.Required.new({
  name: "test1",
  types: ["string", "number"],
});

export const type3: Type.Anonymous = Type.Anonymous.new({
  type: "number",
});

export const type4: Type.Argument = Type.Argument.new({ name: "var1", type: "string" });

export const type5: Type.FromProperty = Type.FromProperty.new({
  property: Property.Instance.Public.newImmutable({
    type: Type.Required.new({
      name: "var5",
      type: "string",
    }),
  }),
});

export const methodInstance4: Method.Instance.Private = Method.Instance.Private.newConstructor({
  content: [
    Bespoke.new({
      name: "methodInstance4",
    }),
  ],
  inTypes: [type4, type5],
});

export const methodInstance5: Method.Instance.Private = Method.Instance.Public.newConstructor({
  inTypes: [],
});

export const variable1: Variable = Variable.newExported({
  type: Type.Required.new({ name: "variable1", type: "string" }),
});

export const variable2: Variable = Variable.newImmutable({
  assignment: "\"TEST\"",
  type: Type.Required.new({ name: "variable2", types: ["string", "undefined"] }),
});

export const variable3: Variable = Variable.newMutable({
  assignment: "1",
  type: Type.Required.new({ name: "variable3", types: ["number", "null", "undefined"] }),
});

export const class1: Class.Abstract = Class.Abstract.newExported({
  content: [
    propertyInstance1,
    propertyStatic1,
    methodInstance1,
    methodStatic1,
  ],
  name: "MyClass1",
  templates: ["T"],
});

export const class2: Class.Concrete = Class.Concrete.newExported({
  content: [
    bespoke1,
    propertyInstance2,
    propertyStatic2,
    methodInstance2,
    methodStatic2,
    methodInstance4,
  ],
  extends: "MyClass1",
  name: "MyClass2",
  templates: ["T", "V"],
});

export const class3: Class.Concrete = Class.Concrete.newInternal({
  content: [
    propertyInstance3,
    propertyStatic3,
    methodInstance3,
    methodStatic3,
    methodInstance5,
  ],
  extends: "MyClass1",
  implements: ["MyInterface1", "MyInterface2"],
  name: "MyClass3",
});

export const enum1: Enum = Enum.newInternal({
  name: "enum1",
  values: {
    A: "B",
    C: "D",
  },
});

export const enum2: Enum = Enum.newExported({
  name: "enum2",
  values: {
    E: 0,
    F: 1,
  },
});

export const namespace1: Namespace = Namespace.newInternal({
  content: [
    class1,
    enum1,
  ],
  name: "namespace1",
});

export const namespace2: Namespace = Namespace.newExported({
  content: [
    class2,
    enum2,
    class3,
  ],
  name: "namespace2",
});
