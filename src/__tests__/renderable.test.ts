/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::renderableTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, verifyUniqueBespoke, verifyUniqueIdentifiers>>
 * SIGNED<<aM68pwGrctaRFjMPubDsqbhijm4PBHeNpQwy719bb2babXMTQL7Ovnrz5TVj3Yd9UxH4NhomEC62oQY7N1SoZQ==>>
 */

/* BESPOKE START <<imports>> */
import { Module } from "../index";
import { bespoke1, interface1 } from "./examples";
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
  "verifyUniqueBespoke",
  async (): Promise<void> => {
    /* BESPOKE START <<verifyUniqueBespoke>> */
    expect(
      () => Module
        .new({
          content: [
            bespoke1,
            bespoke1,
          ],
          destination: "",
        })
        .print({
          name: "",
          path: "",
        }),
    )
      .toThrow();
    /* BESPOKE END <<verifyUniqueBespoke>> */
  },
);

test(
  "verifyUniqueIdentifiers",
  async (): Promise<void> => {
    /* BESPOKE START <<verifyUniqueIdentifiers>> */
    expect(
      () => Module
        .new({
          content: [
            interface1,
            interface1,
          ],
          destination: "",
        })
        .print({
          name: "",
          path: "",
        }),
    )
      .toThrow();
    /* BESPOKE END <<verifyUniqueIdentifiers>> */
  },
);
