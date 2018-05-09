/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::moduleTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, complexModule, contentModule, emptyModule, importModule>>
 * SIGNED<<YGhzEB4FEV+2OB2EBuQHTpU5p4kRmZ3xJmsDfuDVi8zHX/eOZHc34b2qlmMvaCnwX3rjgwnzWJ8buPgca1nqEA==>>
 */

/* BESPOKE START <<imports>> */
import { complexModule, contentModule, emptyModule, importModule } from "./examples";
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
  "complexModule",
  async (): Promise<void> => {
    /* BESPOKE START <<complexModule>> */
    expect(complexModule.print({
      name: "complexModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<complexModule>> */
  },
);

test(
  "contentModule",
  async (): Promise<void> => {
    /* BESPOKE START <<contentModule>> */
    expect(contentModule.print({
      name: "contentModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<contentModule>> */
  },
);

test(
  "emptyModule",
  async (): Promise<void> => {
    /* BESPOKE START <<emptyModule>> */
    expect(emptyModule.print({
      name: "emptyModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<emptyModule>> */
  },
);

test(
  "importModule",
  async (): Promise<void> => {
    /* BESPOKE START <<importModule>> */
    expect(importModule.print({
      name: "importModule",
      path: "src/__tests__/module.test.ts",
    }))
      .toMatchSnapshot();
    /* BESPOKE END <<importModule>> */
  },
);
