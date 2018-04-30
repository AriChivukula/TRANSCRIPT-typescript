import { function1, function2, function3 } from "./examples";

test(
  "function1",
  async (): Promise<void> => {
    expect(function1.print({
      name: "function1",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "function2",
  async (): Promise<void> => {
    expect(function2.print({
      name: "function2",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "function3",
  async (): Promise<void> => {
    expect(function3.print({
      name: "function3",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);
