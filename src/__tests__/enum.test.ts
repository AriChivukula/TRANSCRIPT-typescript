/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::enumTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, enum1, enum2>>
 * SIGNED<<qrWx85WPSS7R1yFaumH3qRdr8OOA0GdSDtTMxIAbbRpPHdVK42Sb/ghnAb1sm1inUdhuUQXjyvESCBrPkxA9mQ==>>
 */

/* BESPOKE START <<imports>> */
import { enum1, enum2 } from "./examples";
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
  "enum1",
  async (): Promise<void> => {
    /* BESPOKE START <<enum1>> */
    expect(enum1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<enum1>> */
  },
);

test(
  "enum2",
  async (): Promise<void> => {
    /* BESPOKE START <<enum2>> */
    expect(enum2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<enum2>> */
  },
);
