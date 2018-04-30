import { variable1, variable2, variable3 } from "./examples";

test(
  "variable1",
  async (): Promise<void> => {
    expect(variable1.print({
      name: "variable1",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "variable2",
  async (): Promise<void> => {
    expect(variable2.print({
      name: "variable2",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "variable3",
  async (): Promise<void> => {
    expect(variable3.print({
      name: "variable3",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);
