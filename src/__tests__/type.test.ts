import { type1, type2, type3, type4 } from "./examples";

test(
  "type1",
  async (): Promise<void> => {
    expect(type1.print({
      name: "type1",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "type2",
  async (): Promise<void> => {
    expect(type2.print({
      name: "type2",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "type3",
  async (): Promise<void> => {
    expect(type3.print({
      name: "type3",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "type4",
  async (): Promise<void> => {
    expect(type4.print({
      name: "type4",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);
