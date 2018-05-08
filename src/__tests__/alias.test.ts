import { alias1, alias2, alias3 } from "./examples";

test(
  "alias1",
  async (): Promise<void> => {
    expect(alias1.print({
      name: "alias1",
      path: "src/__tests__/alias.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "alias2",
  async (): Promise<void> => {
    expect(alias2.print({
      name: "alias2",
      path: "src/__tests__/alias.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "alias3",
  async (): Promise<void> => {
    expect(alias3.print({
      name: "alias3",
      path: "src/__tests__/alias.test.ts",
    }))
      .toMatchSnapshot();
  },
);
