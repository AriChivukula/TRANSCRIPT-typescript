import { Module } from "../index";
import { bespoke1, interface1 } from "./examples";

test(
  "verifyUniqueBespoke",
  async (): Promise<void> => {
    expect(
      () => Module
        .new({
          content: [
            bespoke1,
            bespoke1,
          ],
          destination: "",
        })
        .renderAndVerify({
          name: "",
          path: "",
        }),
    )
      .toThrow();
  },
);

test(
  "verifyUniqueIdentifiers",
  async (): Promise<void> => {
    expect(
      () => Module
        .new({
          content: [
            interface1,
            interface1,
          ],
          destination: "",
        })
        .renderAndVerify({
          name: "",
          path: "",
        }),
    )
      .toThrow();
  },
);
