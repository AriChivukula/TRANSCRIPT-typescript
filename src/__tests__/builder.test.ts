import { Builder } from "../index";

test(
  "Empty",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .print(),
    )
      .toEqual("");
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
      .toEqual("a");
  },
);

test(
  "AddHeader",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .add("b")
        .addHeader("\na\t")
        .print(),
    )
      .toEqual("\na\t\n\nb");
  },
);

test(
  "AddLine",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .addLine("a")
        .print(),
    )
      .toEqual("a\n");
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
      .toEqual("a\n");
    expect(
      Builder
        .new()
        .addLine("a")
        .ensureOnNewline()
        .print(),
    )
      .toEqual("a\n");
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
        .addLine("b")
        .print(),
    )
      .toEqual("a\n\nb\n");
    expect(
      Builder
        .new()
        .addLine("a")
        .ensureOnNewlineAfterEmptyline()
        .print(),
    )
      .toEqual("a\n");
  },
);

test(
  "Indentation",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .addLine("a")
        .indent()
        .addLine("b")
        .indent()
        .ensureOnNewlineAfterEmptyline()
        .addLine("c")
        .unindent()
        .unindent()
        .addLine("d")
        .print(),
    )
      .toEqual("a\n  b\n\n    c\nd\n");
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
        .addLine("a\tb"),
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
        .addLine("a\nb"),
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
        .addLine("a")
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
        .addLine("a")
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
  "AddHeaderError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addHeader("\na\t")
        .addHeader("\na\t"),
    )
      .toThrow();
  },
);
