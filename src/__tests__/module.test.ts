import { TSModule } from "../module";

test(
  "EmptyFile",
  async (): Promise<void> => {
    const output: TSModule = new TSModule();
    expect(output.render()).toMatchSnapshot();
  },
);
