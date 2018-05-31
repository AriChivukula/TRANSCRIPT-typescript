/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::primitiveTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, any, boolean, never, null, number, string, undefined, void>>
 * SIGNED<<LMANftVa6mC8FTMQ3TBIIvxc6KHdIyvAVexmI5fFZI8G+v6uKC86Uo0KAm6PqvyFOoeLG9su9Z2IiPQ5NlXxAQ==>>
 */

/* BESPOKE START <<imports>> */
import {
  primitiveAny,
  primitiveBoolean,
  primitiveNever,
  primitiveNull,
  primitiveNumber,
  primitiveString,
  primitiveUndefined,
  primitiveVoid,
} from "../../gen/examples";
/* BESPOKE END <<imports>> */

beforeAll(
  async (): Promise<void> => {
    /* BESPOKE START <<beforeAll>> */
    /* BESPOKE END <<beforeAll>> */
  },
);

afterAll(
  async (): Promise<void> => {
    /* BESPOKE START <<afterAll>> */
    /* BESPOKE END <<afterAll>> */
  },
);

beforeEach(
  async (): Promise<void> => {
    /* BESPOKE START <<beforeEach>> */
    /* BESPOKE END <<beforeEach>> */
  },
);

afterEach(
  async (): Promise<void> => {
    /* BESPOKE START <<afterEach>> */
    /* BESPOKE END <<afterEach>> */
  },
);

test(
  "any",
  async (): Promise<void> => {
    /* BESPOKE START <<any> */
    expect(primitiveAny)
      .toMatchSnapshot();
    /* BESPOKE END <<any>> */
  },
);

test(
  "boolean",
  async (): Promise<void> => {
    /* BESPOKE START <<boolean>> */
    expect(primitiveBoolean)
      .toMatchSnapshot();
    /* BESPOKE END <<boolean>> */
  },
);

test(
  "never",
  async (): Promise<void> => {
    /* BESPOKE START <<never>> */
    expect(primitiveNever)
      .toMatchSnapshot();
    /* BESPOKE END <<never>> */
  },
);

test(
  "null",
  async (): Promise<void> => {
    /* BESPOKE START <<null>> */
    expect(primitiveNull)
      .toMatchSnapshot();
    /* BESPOKE END <<null>> */
  },
);

test(
  "number",
  async (): Promise<void> => {
    /* BESPOKE START <<number>> */
    expect(primitiveNumber)
      .toMatchSnapshot();
    /* BESPOKE END <<number>> */
  },
);

test(
  "string",
  async (): Promise<void> => {
    /* BESPOKE START <<string>> */
    expect(primitiveString)
      .toMatchSnapshot();
    /* BESPOKE END <<string>> */
  },
);

test(
  "undefined",
  async (): Promise<void> => {
    /* BESPOKE START <<undefined>> */
    expect(primitiveUndefined)
      .toMatchSnapshot();
    /* BESPOKE END <<undefined>> */
  },
);

test(
  "void",
  async (): Promise<void> => {
    /* BESPOKE START <<void>> */
    expect(primitiveVoid)
      .toMatchSnapshot();
    /* BESPOKE END <<void>> */
  },
);
