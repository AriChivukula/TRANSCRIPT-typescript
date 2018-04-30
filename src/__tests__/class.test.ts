import { class1, class2, class3 } from "./examples";

test(
  "class1",
  async (): Promise<void> => {
    expect(class1.print({
      name: "class1",
      path: "src/__tests__/class.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "class2",
  async (): Promise<void> => {
    expect(class2.print({
      name: "class2",
      path: "src/__tests__/class.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "class3",
  async (): Promise<void> => {
    expect(class3.print({
      name: "class3",
      path: "src/__tests__/class.test.ts",
    }))
      .toMatchSnapshot();
  },
);
