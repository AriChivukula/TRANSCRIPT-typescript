/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::interfaceTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, interface1, interface2, interface3>>
 * SIGNED<</EZLPPEGHd8XaEujeTl5+osm5X9otHGIGClbPXwLMD7exiNGtrnKazsfxXHKukKarJvPkRwE6hHNmsYF0HZZfg==>>
 */

/* BESPOKE START <<imports>> */
import { interface1, interface2, interface3 } from "./examples";
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
  "interface1",
  async (): Promise<void> => {
    /* BESPOKE START <<interface1>> */
    expect(interface1.print({
      name: "interface1",
      path: "src/__tests__/interface.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<interface1>> */
  },
);

test(
  "interface2",
  async (): Promise<void> => {
    /* BESPOKE START <<interface2>> */
    expect(interface2.print({
      name: "interface2",
      path: "src/__tests__/interface.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<interface2>> */
  },
);

test(
  "interface3",
  async (): Promise<void> => {
    /* BESPOKE START <<interface3>> */
    expect(interface3.print({
      name: "interface3",
      path: "src/__tests__/interface.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<interface3>> */
  },
);
