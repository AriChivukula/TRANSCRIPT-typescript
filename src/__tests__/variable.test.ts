import { exportedVariable, immutableVariable, mutableVariable } from "./setup";

test(
  "exportedVariable",
  async (): Promise<void> => {
    expect(exportedVariable.render({
      name: "exportedVariable",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "immutableVariable",
  async (): Promise<void> => {
    expect(immutableVariable.render({
      name: "immutableVariable",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "mutableVariable",
  async (): Promise<void> => {
    expect(mutableVariable.render({
      name: "mutableVariable",
      path: "src/__tests__/variable.test.ts",
    }))
      .toMatchSnapshot();
  },
);
