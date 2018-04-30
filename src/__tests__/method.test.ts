import { method1, method2, method3 } from "./examples";

test(
  "method1",
  async (): Promise<void> => {
    expect(method1.print({
      name: "method1",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "method2",
  async (): Promise<void> => {
    expect(method2.print({
      name: "method2",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "method3",
  async (): Promise<void> => {
    expect(method3.print({
      name: "method3",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);
