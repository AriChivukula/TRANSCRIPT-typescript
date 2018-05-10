/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::aliasTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, alias1, alias2, alias3>>
 * SIGNED<<j+hDpBWnZa6zxEjFJsGfEN5LByPKd84zQ4jeLVKSv9STllgXO3IyXhc05BSligLBocXGgFiwI89fqeNmsLcE4w==>>
 */

/* BESPOKE START <<imports>> */
import {
  alias1,
  alias2,
  alias3,
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
  "alias1",
  async (): Promise<void> => {
    /* BESPOKE START <<alias1>> */
    expect(alias1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<alias1>> */
  },
);

test(
  "alias2",
  async (): Promise<void> => {
    /* BESPOKE START <<alias2>> */
    expect(alias2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<alias2>> */
  },
);

test(
  "alias3",
  async (): Promise<void> => {
    /* BESPOKE START <<alias3>> */
    expect(alias3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<alias3>> */
  },
);
