import {
  Jest,
  Module,
} from "../src/index";

export const aliasTest: Module = Jest(
  "src/__tests__/alias.test.ts",
  [
    "alias1",
    "alias2",
    "alias3",
  ],
);

export const bespokeTest: Module = Jest(
  "src/__tests__/bespoke.test.ts",
  [
    "bespoke1",
    "bespoke2",
    "bespoke3",
  ],
);

export const builderTest: Module = Jest(
  "src/__tests__/builder.test.ts",
  [
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
);

export const classTest: Module = Jest(
  "src/__tests__/class.test.ts",
  [
    "class1",
    "class2",
    "class3",
  ],
);

export const enumTest: Module = Jest(
  "src/__tests__/enum.test.ts",
  [
    "enum1",
    "enum2",
  ],
);

export const functionTest: Module = Jest(
  "src/__tests__/function.test.ts",
  [
    "function1",
    "function2",
    "function3",
  ],
);

export const importTest: Module = Jest(
  "src/__tests__/import.test.ts",
  [
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
);

export const interfaceTest: Module = Jest(
  "src/__tests__/interface.test.ts",
  [
    "interface1",
    "interface2",
    "interface3",
  ],
);

export const methodTest: Module = Jest(
  "src/__tests__/method.test.ts",
  [
    "methodInstance1",
    "methodInstance2",
    "methodInstance3",
    "methodInstance4",
    "methodInstance5",
    "methodStatic1",
    "methodStatic2",
    "methodStatic3",
  ],
);

export const moduleTest: Module = Jest(
  "src/__tests__/module.test.ts",
  [
    "complexModule",
    "contentModule",
    "emptyModule",
    "importModule",
  ],
);

export const namespaceTest: Module = Jest(
  "src/__tests__/namespace.test.ts",
  [
    "namespace1",
    "namespace2",
  ],
);

export const propertyTest: Module = Jest(
  "src/__tests__/property.test.ts",
  [
    "propertyInstance1",
    "propertyInstance2",
    "propertyInstance3",
    "propertyStatic1",
    "propertyStatic2",
    "propertyStatic3",
  ],
);

export const renderableTest: Module = Jest(
  "src/__tests__/renderable.test.ts",
  [
    "verifyUniqueBespoke",
    "verifyUniqueIdentifiers",
  ],
);

export const typeTest: Module = Jest(
  "src/__tests__/type.test.ts",
  [
    "type1",
    "type2",
    "type3",
    "type4",
    "type5",
  ],
);

export const variableTest: Module = Jest(
  "src/__tests__/variable.test.ts",
  [
    "variable1",
    "variable2",
    "variable3",
  ],
);
