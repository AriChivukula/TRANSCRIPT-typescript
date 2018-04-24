import { BasicModule, EmptyModule } from "./internal";

test(
  "EmptyModule",
  async (): Promise<void> => {
    const output: EmptyModule = new EmptyModule();
    expect(output.print()).toMatchSnapshot();
  },
);

test(
  "BasicModule",
  async (): Promise<void> => {
    const output: BasicModule = new BasicModule();
    expect(output.print()).toMatchSnapshot();
  },
);
