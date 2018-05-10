/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::cliTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, codegenModuleWithBespoke, moduleCodegenIsInvalid>>
 * SIGNED<<y0USZ6wfaUDmI4KMXOfbXm49Qc9sMS04ZMeOYzKtK1tm/r0fmgPSQvXSEk7N4bD/sGBOOWpc3oVOpkWorLPp+A==>>
 */

/* BESPOKE START <<imports>> */
import {
  codegenModuleWithBespoke,
  moduleCodegenIsInvalid,
} from "../cli"
import {
  complexModule,
} from "../../gen/modules";
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
      "FOO\n/* @@ START <<REPL>> */\n/* @@ END <<REPL>> */\nFOO\n"
        .replace("@@", "BESPOKE")
        .replace("@@", "BESPOKE"),
      "BAR\n/* @@ START <<REPL>> */\nBAR\n/* @@ END <<REPL>> */\nBAR\n"
        .replace("@@", "BESPOKE")
        .replace("@@", "BESPOKE"),
    ))
      .toMatchSnapshot();
    /* BESPOKE END <<codegenModuleWithBespoke>> */
  },
);

test(
  "moduleCodegenIsInvalid",
  async (): Promise<void> => {
    /* BESPOKE START <<moduleCodegenIsInvalid>> */
    expect(moduleCodegenIsInvalid(
      complexModule.print(),
    ))
      .toBeFalsy();
    expect(moduleCodegenIsInvalid(
      complexModule.print().replace("import {", "import{"),
    ))
      .toBeTruthy();
    /* BESPOKE END <<moduleCodegenIsInvalid>> */
  },
);
