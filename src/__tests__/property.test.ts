/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::propertyTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, propertyInstance1, propertyInstance2, propertyInstance3, propertyStatic1, propertyStatic2, propertyStatic3>>
 * SIGNED<<+ZFOluIVJCtciMxVNircnoeOvZu8u8v12hyNzdWg/VeAdWHse9aFPOC8Yb33okxDsuFC3oHpjwU4HKlHweqcog==>>
 */

/* BESPOKE START <<imports>> */
import {
  propertyInstance1,
  propertyInstance2,
  propertyInstance3,
  propertyStatic1,
  propertyStatic2,
  propertyStatic3,
} from "./examples";
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
  "propertyInstance1",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyInstance1>> */
    expect(propertyInstance1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyInstance1>> */
  },
);

test(
  "propertyInstance2",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyInstance2>> */
    expect(propertyInstance2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyInstance2>> */
  },
);

test(
  "propertyInstance3",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyInstance3>> */
    expect(propertyInstance3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyInstance3>> */
  },
);

test(
  "propertyStatic1",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyStatic1>> */
    expect(propertyStatic1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyStatic1>> */
  },
);

test(
  "propertyStatic2",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyStatic2>> */
    expect(propertyStatic2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyStatic2>> */
  },
);

test(
  "propertyStatic3",
  async (): Promise<void> => {
    /* BESPOKE START <<propertyStatic3>> */
    expect(propertyStatic3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propertyStatic3>> */
  },
);
