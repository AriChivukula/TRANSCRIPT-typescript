import { namespace1, namespace2 } from "./examples";

test(
  "namespace1",
  async (): Promise<void> => {
    expect(namespace1.print({
      name: "namespace1",
      path: "src/__tests__/namespace.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "namespace2",
  async (): Promise<void> => {
    expect(namespace2.print({
      name: "namespace2",
      path: "src/__tests__/namespace.test.ts",
    }))
      .toMatchSnapshot();
  },
);
