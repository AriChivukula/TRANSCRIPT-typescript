import {
  propertyInstance1,
  propertyInstance2,
  propertyInstance3,
  propertyStatic1,
  propertyStatic2,
  propertyStatic3,
} from "./examples";

test(
  "propertyInstance1",
  async (): Promise<void> => {
    expect(propertyInstance1.print({
      name: "propertyInstance1",
      path: "src/__tests__/propertyInstance.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "propertyInstance2",
  async (): Promise<void> => {
    expect(propertyInstance2.print({
      name: "propertyInstance2",
      path: "src/__tests__/propertyInstance.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "propertyInstance3",
  async (): Promise<void> => {
    expect(propertyInstance3.print({
      name: "propertyInstance3",
      path: "src/__tests__/propertyInstance.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "propertyStatic1",
  async (): Promise<void> => {
    expect(propertyStatic1.print({
      name: "propertyStatic1",
      path: "src/__tests__/propertyStatic.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "propertyStatic2",
  async (): Promise<void> => {
    expect(propertyStatic2.print({
      name: "propertyStatic2",
      path: "src/__tests__/propertyStatic.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "propertyStatic3",
  async (): Promise<void> => {
    expect(propertyStatic3.print({
      name: "propertyStatic3",
      path: "src/__tests__/propertyStatic.test.ts",
    }))
      .toMatchSnapshot();
  },
);
