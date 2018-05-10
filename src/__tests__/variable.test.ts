/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::variableTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, variable1, variable2, variable3>>
 * SIGNED<<F0L5tHQZ27/DuqtJTPKXq9ldnHrWD3yZijtAi2OsHOGJSUNQUP5latV0A6JAtWzB97aDEraUNIc58W/T8FuS5w==>>
 */

/* BESPOKE START <<imports>> */
import {
  variable1,
  variable2,
  variable3,
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
  "variable1",
  async (): Promise<void> => {
    /* BESPOKE START <<variable1>> */
    expect(variable1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<variable1>> */
  },
);

test(
  "variable2",
  async (): Promise<void> => {
    /* BESPOKE START <<variable2>> */
    expect(variable2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<variable2>> */
  },
);

test(
  "variable3",
  async (): Promise<void> => {
    /* BESPOKE START <<variable3>> */
    expect(variable3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<variable3>> */
  },
);
