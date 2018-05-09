import { enum1, enum2 } from "./examples";

test(
  "enum1",
  async (): Promise<void> => {
    expect(enum1.print({
      name: "enum1",
      path: "src/__tests__/enum.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "enum2",
  async (): Promise<void> => {
    expect(enum2.print({
      name: "enum2",
      path: "src/__tests__/enum.test.ts",
    }))
      .toMatchSnapshot();
  },
);
