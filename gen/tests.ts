import {
  Jest,
  Module,
} from "../src/index";

export const aliasTest: Module = Jest({
  destination: "src/__tests__/alias.test.ts",
  tests: [
    "alias1",
    "alias2",
    "alias3",
  ],
});

export const bespokeTest: Module = Jest({
  destination: "src/__tests__/bespoke.test.ts",
  tests: [
    "bespoke1",
    "bespoke2",
    "bespoke3",
  ],
});

export const builderTest: Module = Jest({
  destination: "src/__tests__/builder.test.ts",
  tests: [
    "Empty",
    "Add",
    "Await",
    "Return",
    "SetHeader",
    "AddThenNewline",
    "AwaitThenNewline",
    "ReturnAwait",
    "Newline",
    "NewlineAfterEmptyline",
    "Indentation",
    "For",
    "IfElse",
    "Switch",
    "TryCatch",
    "EmptyError",
    "TabError",
    "NewlineError",
    "AwaitError",
    "ReturnError",
    "UnindentError",
    "IndentError",
    "IndentNewlineError",
    "SetHeaderError",
    "CasePrintError",
    "CaseError",
    "ForPrintError",
    "ForError",
    "IfPrintError",
    "IfError",
    "SwitchPrintError",
    "SwitchError",
    "TryPrintError",
    "TryError",
  ],
});

export const classTest: Module = Jest({
  destination: "src/__tests__/class.test.ts",
  tests: [
    "class1",
    "class2",
    "class3",
  ],
});

export const enumTest: Module = Jest({
  destination: "src/__tests__/enum.test.ts",
  tests: [
    "enum1",
    "enum2",
  ],
});

export const functionTest: Module = Jest({
  destination: "src/__tests__/function.test.ts",
  tests: [
    "function1",
    "function2",
    "function3",
  ],
});

export const importTest: Module = Jest({
  destination: "src/__tests__/import.test.ts",
  tests: [
    "importAll1",
    "importAll2",
    "importAll3",
    "importDefault1",
    "importDefault2",
    "importDefault3",
    "importRaw1",
    "importRaw2",
    "importRaw3",
    "importSome1",
    "importSome2",
    "importSome3",
  ],
});

export const interfaceTest: Module = Jest({
  destination: "src/__tests__/interface.test.ts",
  tests: [
    "interface1",
    "interface2",
    "interface3",
  ],
});

export const methodTest: Module = Jest({
  destination: "src/__tests__/method.test.ts",
  tests: [
    "methodInstance1",
    "methodInstance2",
    "methodInstance3",
    "methodInstance4",
    "methodInstance5",
    "methodStatic1",
    "methodStatic2",
    "methodStatic3",
  ],
});

export const moduleTest: Module = Jest({
  destination: "src/__tests__/module.test.ts",
  tests: [
    "complexModule",
    "contentModule",
    "emptyModule",
    "importModule",
  ],
});

export const namespaceTest: Module = Jest({
  destination: "src/__tests__/namespace.test.ts",
  tests: [
    "namespace1",
    "namespace2",
  ],
});

export const primitiveTest: Module = Jest({
  destination: "src/__tests__/primitive.test.ts",
  tests: [
    "any",
    "boolean",
    "never",
    "null",
    "number",
    "string",
    "undefined",
    "void",
  ],
});

export const propertyTest: Module = Jest({
  destination: "src/__tests__/property.test.ts",
  tests: [
    "propertyInstance1",
    "propertyInstance2",
    "propertyInstance3",
    "propertyStatic1",
    "propertyStatic2",
    "propertyStatic3",
  ],
});

export const rendererTest: Module = Jest({
  destination: "src/__tests__/renderer.test.ts",
  tests: [
    "verifyUniqueBespoke",
    "verifyUniqueIdentifiers",
  ],
});

export const typeTest: Module = Jest({
  destination: "src/__tests__/type.test.ts",
  tests: [
    "type1",
    "type2",
    "type3",
    "type4",
    "type5",
  ],
});

export const variableTest: Module = Jest({
  destination: "src/__tests__/variable.test.ts",
  tests: [
    "variable1",
    "variable2",
    "variable3",
  ],
});

export const viewsTest: Module = Jest({
  destination: "src/__tests__/views.test.ts",
  tests: [
    "simpleView",
    "propsView",
    "stateView",
    "fragmentRelayView",
    "paginationRelayView",
    "refetchRelayView",
  ],
});

export const cliTest: Module = Jest({
  destination: "src/__tests__/cli.test.ts",
  tests: [
    "codegenModuleWithBespoke",
    "moduleCodegenIsInvalid",
  ],
});
