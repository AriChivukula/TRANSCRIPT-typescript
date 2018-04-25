import { complexModule, contentModule, emptyModule, importModule } from "./setup";

test(
  "complexModule",
  async (): Promise<void> => {
    expect(complexModule.print({
      name: "complexModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "contentModule",
  async (): Promise<void> => {
    expect(contentModule.print({
      name: "contentModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "emptyModule",
  async (): Promise<void> => {
    expect(emptyModule.print({
      name: "emptyModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importModule",
  async (): Promise<void> => {
    expect(importModule.print({
      name: "importModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);
