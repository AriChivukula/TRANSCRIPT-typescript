import { exportedVariable, immutableVariable, mutableVariable } from "./internal";

test(
  "exportedVariable",
  async (): Promise<void> => {
    expect(exportedVariable.render()).toMatchSnapshot();
  },
);

test(
  "immutableVariable",
  async (): Promise<void> => {
    expect(immutableVariable.render()).toMatchSnapshot();
  },
);

test(
  "mutableVariable",
  async (): Promise<void> => {
    expect(mutableVariable.render()).toMatchSnapshot();
  },
);
