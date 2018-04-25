import { basicModule, emptyModule } from "./setup";

test(
  "basicModule",
  async (): Promise<void> => {
    expect(basicModule.print({
      name: "basicModule",
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
