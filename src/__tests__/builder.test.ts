import { Builder } from "../internal";

test(
  "Empty",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .render(),
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
        .render(),
    )
      .toEqual("a");
  },
);

test(
  "AddLine",
  async (): Promise<void> => {
    expect(
      Builder
        .new()
        .addLine("a")
        .render(),
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
        .render(),
    )
      .toEqual("a\n");
    expect(
      Builder
        .new()
        .addLine("a")
        .ensureOnNewline()
        .render(),
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
        .render(),
    )
      .toEqual("a\n\n");
    expect(
      Builder
        .new()
        .addLine("a")
        .ensureOnNewlineAfterEmptyline()
        .render(),
    )
      .toEqual("a\n\n");
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
        .render(),
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
  "TrimError",
  async (): Promise<void> => {
    expect(
      () => Builder
        .new()
        .addLine(" a"),
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
        .render(),
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
