import { TSModule } from "../module";

class TestModule extends TSModule {

	public breadcrumb(): string {
		return this.constructor.name;
	}
}

test(
  "EmptyFile",
  async (): Promise<void> => {
    const output: TestModule = new TestModule();
    expect(output.print()).toMatchSnapshot();
  },
);
