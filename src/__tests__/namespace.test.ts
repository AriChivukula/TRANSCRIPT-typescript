/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::namespaceTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, namespace1, namespace2>>
 * SIGNED<<iJVXRTB0Or/epYds+030fkyTI08KwyS4kTjJQt1qFUySBTY4/Jq0sdgZ/lbGNqL42oXJnQ6b/WkClGBg6j8+nQ==>>
 */

/* BESPOKE START <<imports>> */
import {
  namespace1,
  namespace2,
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
  "namespace1",
  async (): Promise<void> => {
    /* BESPOKE START <<namespace1>> */
    expect(namespace1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<namespace1>> */
  },
);

test(
  "namespace2",
  async (): Promise<void> => {
    /* BESPOKE START <<namespace2>> */
    expect(namespace2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<namespace2>> */
  },
);
