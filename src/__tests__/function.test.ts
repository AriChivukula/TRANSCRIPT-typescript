import { function1, function2, function3 } from "./setup";

test(
  "function1",
  async (): Promise<void> => {
    expect(function1.render({
      name: "function1",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "function2",
  async (): Promise<void> => {
    expect(function2.render({
      name: "function2",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "function3",
  async (): Promise<void> => {
    expect(function3.render({
      name: "function3",
      path: "src/__tests__/function.test.ts",
    }))
      .toMatchSnapshot();
  },
);
