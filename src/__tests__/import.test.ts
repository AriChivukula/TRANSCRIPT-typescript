import {
  importAll1,
  importAll2,
  importAll3,
  importDefault1,
  importDefault2,
  importDefault3,
  importSome1,
  importSome2,
  importSome3,
} from "./setup";

test(
  "importAll1",
  async (): Promise<void> => {
    expect(importAll1.render({
      name: "importAll1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll2",
  async (): Promise<void> => {
    expect(importAll2.render({
      name: "importAll2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll3",
  async (): Promise<void> => {
    expect(importAll3.render({
      name: "importAll3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault1",
  async (): Promise<void> => {
    expect(importDefault1.render({
      name: "importDefault1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault2",
  async (): Promise<void> => {
    expect(importDefault2.render({
      name: "importDefault2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault3",
  async (): Promise<void> => {
    expect(importDefault3.render({
      name: "importDefault3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome1",
  async (): Promise<void> => {
    expect(importSome1.render({
      name: "importSome1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome2",
  async (): Promise<void> => {
    expect(importSome2.render({
      name: "importSome2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome3",
  async (): Promise<void> => {
    expect(importSome3.render({
      name: "importSome3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);
