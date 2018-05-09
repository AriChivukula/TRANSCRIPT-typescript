/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::classTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, class1, class2, class3>>
 * SIGNED<<lQVIrPnCp92XZVAYwj+YlIBjw+6oIRmFh119H2jN4rR7z0vFRMZ4WfDL0B9GWbM41s2/MAUFb2kbDwinnuEjWw==>>
 */

/* BESPOKE START <<imports>> */
import { class1, class2, class3 } from "./examples";
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
  "class1",
  async (): Promise<void> => {
    /* BESPOKE START <<class1>> */
    expect(class1.print())
      .toMatchSnapshot();
    /* BESPOKE END <<class1>> */
  },
);

test(
  "class2",
  async (): Promise<void> => {
    /* BESPOKE START <<class2>> */
    expect(class2.print())
      .toMatchSnapshot();
    /* BESPOKE END <<class2>> */
  },
);

test(
  "class3",
  async (): Promise<void> => {
    /* BESPOKE START <<class3>> */
    expect(class3.print())
      .toMatchSnapshot();
    /* BESPOKE END <<class3>> */
  },
);
