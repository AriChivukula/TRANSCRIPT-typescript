import { basicModule, emptyModule } from "./setup";

test(
  "basicModule",
  async (): Promise<void> => {
    expect(basicModule.print("TEST")).toMatchSnapshot();
  },
);

test(
  "emptyModule",
  async (): Promise<void> => {
    expect(emptyModule.print("TEST")).toMatchSnapshot();
  },
);
