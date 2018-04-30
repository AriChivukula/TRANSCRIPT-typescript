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
