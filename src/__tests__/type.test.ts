import { type1, type2, type3 } from "./setup";

test(
  "type1",
  async (): Promise<void> => {
    expect(type1.render({
      name: "type1",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "type2",
  async (): Promise<void> => {
    expect(type2.render({
      name: "type2",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "type3",
  async (): Promise<void> => {
    expect(type3.render({
      name: "type3",
      path: "src/__tests__/type.test.ts",
    }))
      .toMatchSnapshot();
  },
);
