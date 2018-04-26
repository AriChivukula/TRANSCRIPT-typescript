import { complexModule, contentModule, emptyModule, importModule } from "./setup";

test(
  "complexModule",
  async (): Promise<void> => {
    expect(complexModule.render({
      name: "complexModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "contentModule",
  async (): Promise<void> => {
    expect(contentModule.render({
      name: "contentModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "emptyModule",
  async (): Promise<void> => {
    expect(emptyModule.render({
      name: "emptyModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importModule",
  async (): Promise<void> => {
    expect(importModule.render({
      name: "importModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
  },
);
