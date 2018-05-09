/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::builderTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, Empty, Add, Await, Return, SetHeader, AddThenNewline, AwaitThenNewline, ReturnAwait, Newline, NewlineAfterEmptyline, Indentation, For, IfElse, Switch, TryCatch, EmptyError, TabError, NewlineError, AwaitError, ReturnError, UnindentError, IndentError, IndentNewlineError, SetHeaderError, CasePrintError, CaseError, ForPrintError, ForError, IfPrintError, IfError, SwitchPrintError, SwitchError, TryPrintError, TryError>>
 * SIGNED<<nORYyX+p7LPQ3UrKY+kXh5I5E2yzhOqzt2P1Zec/yuUlzb5Ym/+KhU5Ajx1d4vSjN0ua/g9uBwwEhbzYVZ9t1w==>>
 */

/* BESPOKE START <<imports>> */
import { Builder } from "../index";
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
  "Empty",
  async (): Promise<void> => {
    /* BESPOKE START <<Empty>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Empty>> */
  },
);

test(
  "Add",
  async (): Promise<void> => {
    /* BESPOKE START <<Add>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .add("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Add>> */
  },
);

test(
  "Await",
  async (): Promise<void> => {
    /* BESPOKE START <<Await>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .await("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Await>> */
  },
);

test(
  "Return",
  async (): Promise<void> => {
    /* BESPOKE START <<Return>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .return("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Return>> */
  },
);

test(
  "SetHeader",
  async (): Promise<void> => {
    /* BESPOKE START <<SetHeader>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .add("b")
        .setHeader("\na\t")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<SetHeader>> */
  },
);

test(
  "AddThenNewline",
  async (): Promise<void> => {
    /* BESPOKE START <<AddThenNewline>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<AddThenNewline>> */
  },
);

test(
  "AwaitThenNewline",
  async (): Promise<void> => {
    /* BESPOKE START <<AwaitThenNewline>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .awaitThenNewline("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<AwaitThenNewline>> */
  },
);

test(
  "ReturnAwait",
  async (): Promise<void> => {
    /* BESPOKE START <<ReturnAwait>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .returnAwait("a")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<ReturnAwait>> */
  },
);

test(
  "Newline",
  async (): Promise<void> => {
    /* BESPOKE START <<Newline>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .add("a")
        .ensureOnNewline()
        .print(),
    )
      .toMatchSnapshot();
    expect(
      Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .ensureOnNewline()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Newline>> */
  },
);

test(
  "NewlineAfterEmptyline",
  async (): Promise<void> => {
    /* BESPOKE START <<NewlineAfterEmptyline>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .add("a")
        .ensureOnNewlineAfterEmptyline()
        .addThenNewline("b")
        .print(),
    )
      .toMatchSnapshot();
    expect(
      Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .ensureOnNewlineAfterEmptyline()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<NewlineAfterEmptyline>> */
  },
);

test(
  "Indentation",
  async (): Promise<void> => {
    /* BESPOKE START <<Indentation>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .indent()
        .addThenNewline("b")
        .indent()
        .ensureOnNewlineAfterEmptyline()
        .addThenNewline("c")
        .unindent()
        .unindent()
        .addThenNewline("d")
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Indentation>> */
  },
);

test(
  "For",
  async (): Promise<void> => {
    /* BESPOKE START <<For>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .for("A")
        .addThenNewline("B")
        .endFor()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<For>> */
  },
);

test(
  "IfElse",
  async (): Promise<void> => {
    /* BESPOKE START <<IfElse>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .if("A")
        .addThenNewline("B")
        .elseIf("C")
        .addThenNewline("D")
        .else()
        .addThenNewline("E")
        .endIf()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<IfElse>> */
  },
);

test(
  "Switch",
  async (): Promise<void> => {
    /* BESPOKE START <<Switch>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .switch("A")
        .case("B")
        .addThenNewline("C")
        .endCase()
        .case("D")
        .endCase()
        .default()
        .endCase()
        .endSwitch()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<Switch>> */
  },
);

test(
  "TryCatch",
  async (): Promise<void> => {
    /* BESPOKE START <<TryCatch>> */
    expect(
      Builder
        .new({ name: "", path: "" })
        .try()
        .addThenNewline("A")
        .catch()
        .addThenNewline("B")
        .catch("foo")
        .addThenNewline("C")
        .finally()
        .addThenNewline("D")
        .endTry()
        .print(),
    )
      .toMatchSnapshot();
    /* BESPOKE END <<TryCatch>> */
  },
);

test(
  "EmptyError",
  async (): Promise<void> => {
    /* BESPOKE START <<EmptyError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .add(""),
    )
      .toThrow();
    /* BESPOKE END <<EmptyError>> */
  },
);

test(
  "TabError",
  async (): Promise<void> => {
    /* BESPOKE START <<TabError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a\tb"),
    )
      .toThrow();
    /* BESPOKE END <<TabError>> */
  },
);

test(
  "NewlineError",
  async (): Promise<void> => {
    /* BESPOKE START <<NewlineError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a\nb"),
    )
      .toThrow();
    /* BESPOKE END <<NewlineError>> */
  },
);

test(
  "AwaitError",
  async (): Promise<void> => {
    /* BESPOKE START <<AwaitError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a\nawait"),
    )
      .toThrow();
    /* BESPOKE END <<AwaitError>> */
  },
);

test(
  "ReturnError",
  async (): Promise<void> => {
    /* BESPOKE START <<ReturnError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a\nreturn"),
    )
      .toThrow();
    /* BESPOKE END <<ReturnError>> */
  },
);

test(
  "UnindentError",
  async (): Promise<void> => {
    /* BESPOKE START <<UnindentError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .unindent(),
    )
      .toThrow();
    /* BESPOKE END <<UnindentError>> */
  },
);

test(
  "IndentError",
  async (): Promise<void> => {
    /* BESPOKE START <<IndentError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .addThenNewline("a")
        .indent()
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<IndentError>> */
  },
);

test(
  "IndentNewlineError",
  async (): Promise<void> => {
    /* BESPOKE START <<IndentNewlineError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .indent(),
    )
      .toThrow();
    /* BESPOKE END <<IndentNewlineError>> */
  },
);

test(
  "SetHeaderError",
  async (): Promise<void> => {
    /* BESPOKE START <<SetHeaderError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .setHeader("\na\t")
        .setHeader("\na\t"),
    )
      .toThrow();
    /* BESPOKE END <<SetHeaderError>> */
  },
);

test(
  "CasePrintError",
  async (): Promise<void> => {
    /* BESPOKE START <<CasePrintError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .switch("A")
        .case("B")
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<CasePrintError>> */
  },
);

test(
  "CaseError",
  async (): Promise<void> => {
    /* BESPOKE START <<CaseError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .endCase(),
    )
      .toThrow();
    /* BESPOKE END <<CaseError>> */
  },
);

test(
  "ForPrintError",
  async (): Promise<void> => {
    /* BESPOKE START <<ForPrintError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .for("true")
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<ForPrintError>> */
  },
);

test(
  "ForError",
  async (): Promise<void> => {
    /* BESPOKE START <<ForError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .endFor(),
    )
      .toThrow();
    /* BESPOKE END <<ForError>> */
  },
);

test(
  "IfPrintError",
  async (): Promise<void> => {
    /* BESPOKE START <<IfPrintError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .if("true")
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<IfPrintError>> */
  },
);

test(
  "IfError",
  async (): Promise<void> => {
    /* BESPOKE START <<IfError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .else(),
    )
      .toThrow();
    /* BESPOKE END <<IfError>> */
  },
);

test(
  "SwitchPrintError",
  async (): Promise<void> => {
    /* BESPOKE START <<SwitchPrintError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .switch("A")
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<SwitchPrintError>> */
  },
);

test(
  "SwitchError",
  async (): Promise<void> => {
    /* BESPOKE START <<SwitchError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .endSwitch(),
    )
      .toThrow();
    /* BESPOKE END <<SwitchError>> */
  },
);

test(
  "TryPrintError",
  async (): Promise<void> => {
    /* BESPOKE START <<TryPrintError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .try()
        .print(),
    )
      .toThrow();
    /* BESPOKE END <<TryPrintError>> */
  },
);

test(
  "TryError",
  async (): Promise<void> => {
    /* BESPOKE START <<TryError>> */
    expect(
      () => Builder
        .new({ name: "", path: "" })
        .catch(),
    )
      .toThrow();
    /* BESPOKE END <<TryError>> */
  },
);
