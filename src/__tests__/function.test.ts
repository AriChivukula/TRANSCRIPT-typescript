/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::functionTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, function1, function2, function3>>
 * SIGNED<<LOmrni6VH1mXehE77cT79id8wqpQjuz/sQmdXUr8kNEQSdkCLu4bHmndtxLIVoE19+Jo8NTah8xlm05bTeQnvw==>>
 */

/* BESPOKE START <<imports>> */
import { function1, function2, function3 } from "./examples";
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
  "function1",
  async (): Promise<void> => {
    /* BESPOKE START <<function1>> */
    expect(function1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<function1>> */
  },
);

test(
  "function2",
  async (): Promise<void> => {
    /* BESPOKE START <<function2>> */
    expect(function2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<function2>> */
  },
);

test(
  "function3",
  async (): Promise<void> => {
    /* BESPOKE START <<function3>> */
    expect(function3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<function3>> */
  },
);
