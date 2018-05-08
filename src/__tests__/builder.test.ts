import { Builder } from "../index";

test(
  "Empty",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "Add",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .add("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "Await",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .await("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "Return",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .return("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "SetHeader",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .add("b")
        .setHeader("\na\t")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "AddThenNewline",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .addThenNewline("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "AwaitThenNewline",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .awaitThenNewline("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "ReturnAwait",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .returnAwait("a")
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "Newline",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .add("a")
        .ensureOnNewline()
        .print(),
    )
      .toMatchSnapshot();
    expect(
      Builder
        .new()
        .addThenNewline("a")
        .ensureOnNewline()
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "NewlineAfterEmptyline",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .add("a")
        .ensureOnNewlineAfterEmptyline()
        .addThenNewline("b")
        .print(),
    )
      .toMatchSnapshot();
    expect(
      Builder
        .new()
        .addThenNewline("a")
        .ensureOnNewlineAfterEmptyline()
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "Indentation",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
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
  },
);

test(
  "For",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .for("A")
        .addThenNewline("B")
        .endFor()
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "IfElse",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
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
  },
);

test(
  "Switch",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .switch("A")
        .endSwitch()
        .print(),
    )
      .toMatchSnapshot();
  },
);

test(
  "TryCatch",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
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
  },
);

test(
  "EmptyError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .add(""),
    )
      .toThrow();
  },
);

test(
  "TabError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a\tb"),
    )
      .toThrow();
  },
);

test(
  "NewlineError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a\nb"),
    )
      .toThrow();
  },
);

test(
  "AwaitError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a\nawait"),
    )
      .toThrow();
  },
);

test(
  "ReturnError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a\nreturn"),
    )
      .toThrow();
  },
);

test(
  "UnindentError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a")
        .unindent(),
    )
      .toThrow();
  },
);

test(
  "IndentError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addThenNewline("a")
        .indent()
        .print(),
    )
      .toThrow();
  },
);

test(
  "IndentNewlineError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .indent(),
    )
      .toThrow();
  },
);

test(
  "SetHeaderError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .setHeader("\na\t")
        .setHeader("\na\t"),
    )
      .toThrow();
  },
);

test(
  "ForPrintError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .for("true")
        .print(),
    )
      .toThrow();
  },
);

test(
  "ForError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .endFor(),
    )
      .toThrow();
  },
);

test(
  "IfPrintError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .if("true")
        .print(),
    )
      .toThrow();
  },
);

test(
  "IfError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .else(),
    )
      .toThrow();
  },
);

test(
  "SwitchPrintError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .switch("A")
        .print(),
    )
      .toThrow();
  },
);

test(
  "SwitchError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .endSwitch(),
    )
      .toThrow();
  },
);

test(
  "TryPrintError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .try()
        .print(),
    )
      .toThrow();
  },
);

test(
  "TryError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .catch(),
    )
      .toThrow();
  },
);
