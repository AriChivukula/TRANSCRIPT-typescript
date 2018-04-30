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
    expect(importAll1.renderAndVerify({
      name: "importAll1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll2",
  async (): Promise<void> => {
    expect(importAll2.renderAndVerify({
      name: "importAll2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importAll3",
  async (): Promise<void> => {
    expect(importAll3.renderAndVerify({
      name: "importAll3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault1",
  async (): Promise<void> => {
    expect(importDefault1.renderAndVerify({
      name: "importDefault1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault2",
  async (): Promise<void> => {
    expect(importDefault2.renderAndVerify({
      name: "importDefault2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importDefault3",
  async (): Promise<void> => {
    expect(importDefault3.renderAndVerify({
      name: "importDefault3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw1",
  async (): Promise<void> => {
    expect(importRaw1.renderAndVerify({
      name: "importRaw1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw2",
  async (): Promise<void> => {
    expect(importRaw2.renderAndVerify({
      name: "importRaw2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importRaw3",
  async (): Promise<void> => {
    expect(importRaw3.renderAndVerify({
      name: "importRaw3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome1",
  async (): Promise<void> => {
    expect(importSome1.renderAndVerify({
      name: "importSome1",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome2",
  async (): Promise<void> => {
    expect(importSome2.renderAndVerify({
      name: "importSome2",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);

test(
  "importSome3",
  async (): Promise<void> => {
    expect(importSome3.renderAndVerify({
      name: "importSome3",
      path: "src/__tests__/import.test.ts",
    }))
      .toMatchSnapshot();
  },
);
