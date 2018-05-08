import {
  methodInstance1,
  methodInstance2,
  methodInstance3,
  methodStatic1,
  methodStatic2,
  methodStatic3,
} from "./examples";

test(
  "methodInstance1",
  async (): Promise<void> => {
    expect(methodInstance1.print({
      name: "methodInstance1",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "methodInstance2",
  async (): Promise<void> => {
    expect(methodInstance2.print({
      name: "methodInstance2",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "methodInstance3",
  async (): Promise<void> => {
    expect(methodInstance3.print({
      name: "methodInstance3",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "methodStatic1",
  async (): Promise<void> => {
    expect(methodStatic1.print({
      name: "methodStatic1",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "methodStatic2",
  async (): Promise<void> => {
    expect(methodStatic2.print({
      name: "methodStatic2",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "methodStatic3",
  async (): Promise<void> => {
    expect(methodStatic3.print({
      name: "methodStatic3",
      path: "src/__tests__/method.test.ts",
    }))
      .toMatchSnapshot();
  },
);
