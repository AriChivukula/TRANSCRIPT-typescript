import { property1, property2, property3 } from "./examples";

test(
  "property1",
  async (): Promise<void> => {
    expect(property1.print({
      name: "property1",
      path: "src/__tests__/property.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "property2",
  async (): Promise<void> => {
    expect(property2.print({
      name: "property2",
      path: "src/__tests__/property.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "property3",
  async (): Promise<void> => {
    expect(property3.print({
      name: "property3",
      path: "src/__tests__/property.test.ts",
    }))
      .toMatchSnapshot();
  },
);
