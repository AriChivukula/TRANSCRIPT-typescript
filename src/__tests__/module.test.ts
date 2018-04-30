import { complexModule, contentModule, emptyModule, importModule } from "./examples";

test(
  "complexModule",
  async (): Promise<void> => {
    expect(complexModule.renderAndVerify({
      name: "complexModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "contentModule",
  async (): Promise<void> => {
    expect(contentModule.renderAndVerify({
      name: "contentModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "emptyModule",
  async (): Promise<void> => {
    expect(emptyModule.renderAndVerify({
      name: "emptyModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importModule",
  async (): Promise<void> => {
    expect(importModule.renderAndVerify({
      name: "importModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);
