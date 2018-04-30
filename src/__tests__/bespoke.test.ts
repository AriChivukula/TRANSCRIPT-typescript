import { bespoke1, bespoke2, bespoke3 } from "./examples";

test(
  "bespoke1",
  async (): Promise<void> => {
    expect(bespoke1.print({
      name: "bespoke1",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "bespoke2",
  async (): Promise<void> => {
    expect(bespoke2.print({
      name: "bespoke2",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "bespoke3",
  async (): Promise<void> => {
    expect(bespoke3.print({
      name: "bespoke3",
      path: "src/__tests__/bespoke.test.ts",
    }))
      .toMatchSnapshot();
  },
);
