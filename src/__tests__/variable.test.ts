import { variable1, variable2, variable3 } from "./setup";

test(
  "variable1",
  async (): Promise<void> => {
    expect(variable1.render({
      name: "variable1",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "variable2",
  async (): Promise<void> => {
    expect(variable2.render({
      name: "variable2",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "variable3",
  async (): Promise<void> => {
    expect(variable3.render({
      name: "variable3",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);
