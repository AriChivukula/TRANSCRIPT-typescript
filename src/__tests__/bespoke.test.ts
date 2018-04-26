import { bespoke1, bespoke2, bespoke3 } from "./setup";

test(
  "bespoke1",
  async (): Promise<void> => {
    expect(bespoke1.render({
      name: "bespoke1",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "bespoke2",
  async (): Promise<void> => {
    expect(bespoke2.render({
      name: "bespoke2",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "bespoke3",
  async (): Promise<void> => {
    expect(bespoke3.render({
      name: "bespoke3",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);
