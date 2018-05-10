/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::bespokeTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, bespoke1, bespoke2, bespoke3>>
 * SIGNED<<l9bE2X4NijT1hkRs5ZDhTpEaVJcDNJiSejIsu55gsFmgsJXtiQbMxLIeWIa1eoBMT5Q0UUi+oSooqz0iL4TIcA==>>
 */

/* BESPOKE START <<imports>> */
import {
  bespoke1,
  bespoke2,
  bespoke3,
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
  "bespoke1",
  async (): Promise<void> => {
    /* BESPOKE START <<bespoke1>> */
    expect(bespoke1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<bespoke1>> */
  },
);

test(
  "bespoke2",
  async (): Promise<void> => {
    /* BESPOKE START <<bespoke2>> */
    expect(bespoke2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<bespoke2>> */
  },
);

test(
  "bespoke3",
  async (): Promise<void> => {
    /* BESPOKE START <<bespoke3>> */
    expect(bespoke3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<bespoke3>> */
  },
);
