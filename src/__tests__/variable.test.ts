import { TSVariable } from "../index";

class BasicVariable extends TSVariable {

	public types: string[] = ["string"];
	public name: string = "basicTest";
}

class ComplexVariable extends TSVariable {

  public default: string | undefined = "\"complex test\"";
  public isExported: boolean = true;
  public isMutable: boolean = true;
  public name: string = "complexTest";
  public types: string[] = ["string", "null"];
}

test(
  "BasicVariable",
  async (): Promise<void> => {
    const output: BasicVariable = new BasicVariable();
    expect(output.render()).toMatchSnapshot();
  },
);

test(
  "BasicVariable",
  async (): Promise<void> => {
    const output: ComplexVariable = new ComplexVariable();
    expect(output.render()).toMatchSnapshot();
  },
);
