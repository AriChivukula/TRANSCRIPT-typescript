/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::cliTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, codegenModuleWithBespoke>>
 * SIGNED<<y00hXWupNT25rgjF1AveV1whfGkI+WumdcWTaES9H2X/GhYkxYcJATFioM6DvBHtDXyxayRGQDNH9K+chANlXg==>>
 */

/* BESPOKE START <<imports>> */
import {
  codegenModuleWithBespoke,
} from "../cli"
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
  "codegenModuleWithBespoke",
  async (): Promise<void> => {
    /* BESPOKE START <<codegenModuleWithBespoke>> */
    expect(codegenModuleWithBespoke(
      "REPL",
      "FOO\n/* BESPOKE START <<REPL>> */\n/* BESPOKE END <<REPL>> */\nFOO\n",
      "BAR\n/* BESPOKE START <<REPL>> */\nBAR\n/* BESPOKE END <<REPL>> */\nBAR\n",
    ))
      .toMatchSnapshot();
    /* BESPOKE END <<codegenModuleWithBespoke>> */
  },
);
