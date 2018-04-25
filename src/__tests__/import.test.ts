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
    expect(importAll1.render())
      .toMatchSnapshot();
  },
);

test(
  "importAll2",
  async (): Promise<void> => {
    expect(importAll2.render())
      .toMatchSnapshot();
  },
);

test(
  "importAll3",
  async (): Promise<void> => {
    expect(importAll3.render())
      .toMatchSnapshot();
  },
);

test(
  "importDefault1",
  async (): Promise<void> => {
    expect(importDefault1.render())
      .toMatchSnapshot();
  },
);

test(
  "importDefault2",
  async (): Promise<void> => {
    expect(importDefault2.render())
      .toMatchSnapshot();
  },
);

test(
  "importDefault3",
  async (): Promise<void> => {
    expect(importDefault3.render())
      .toMatchSnapshot();
  },
);

test(
  "importSome1",
  async (): Promise<void> => {
    expect(importSome1.render())
      .toMatchSnapshot();
  },
);

test(
  "importSome2",
  async (): Promise<void> => {
    expect(importSome2.render())
      .toMatchSnapshot();
  },
);

test(
  "importSome3",
  async (): Promise<void> => {
    expect(importSome3.render())
      .toMatchSnapshot();
  },
);
