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
