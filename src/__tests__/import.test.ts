import {
  importAll1,
  importAll2,
  importAll3,
  importDefault1,
  importDefault2,
  importDefault3,
  importRaw1,
  importRaw2,
  importRaw3,
  importSome1,
  importSome2,
  importSome3,
} from "./examples";

test(
  "importAll1",
  async (): Promise<void> => {
    expect(importAll1.print({
      name: "importAll1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll2",
  async (): Promise<void> => {
    expect(importAll2.print({
      name: "importAll2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll3",
  async (): Promise<void> => {
    expect(importAll3.print({
      name: "importAll3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault1",
  async (): Promise<void> => {
    expect(importDefault1.print({
      name: "importDefault1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault2",
  async (): Promise<void> => {
    expect(importDefault2.print({
      name: "importDefault2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault3",
  async (): Promise<void> => {
    expect(importDefault3.print({
      name: "importDefault3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw1",
  async (): Promise<void> => {
    expect(importRaw1.print({
      name: "importRaw1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw2",
  async (): Promise<void> => {
    expect(importRaw2.print({
      name: "importRaw2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw3",
  async (): Promise<void> => {
    expect(importRaw3.print({
      name: "importRaw3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome1",
  async (): Promise<void> => {
    expect(importSome1.print({
      name: "importSome1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome2",
  async (): Promise<void> => {
    expect(importSome2.print({
      name: "importSome2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome3",
  async (): Promise<void> => {
    expect(importSome3.print({
      name: "importSome3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);
