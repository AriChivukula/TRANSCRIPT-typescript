import { BasicVariable, ComplexVariable } from "./internal";

test(
  "BasicVariable",
  async (): Promise<void> => {
    const output: BasicVariable = new BasicVariable();
    expect(output.render()).toMatchSnapshot();
  },
);

test(
  "ComplexVariable",
  async (): Promise<void> => {
    const output: ComplexVariable = new ComplexVariable();
    expect(output.render()).toMatchSnapshot();
  },
);
