import { Bespoke } from "./bespoke";
import { Builder } from "./builder";
import { Module } from "./module";
import { IContext, Renderable } from "./renderable";

interface IJestCall {
  readonly functionName: string;
  readonly testName?: string;
}

class JestCall extends Renderable {

  public static new(props: IJestCall): JestCall {
    return new JestCall(props);
  }

  private constructor(
    private readonly props: IJestCall,
  ) {
    super();
  }

	public bespokes(): string[] {
    if (this.props.testName !== undefined) {
      return [this.props.testName];
    }
		return [this.props.functionName];
	}

	public identifiers(): string[] {
    if (this.props.testName !== undefined) {
      return [this.props.testName];
    }
		return [this.props.functionName];
	}

	protected render(context: IContext, builder: Builder): void {
		builder
      .addThenNewline(`${this.props.functionName}(`)
      .indent();
    if (this.props.testName !== undefined) {
      builder.addThenNewline(`"${this.props.testName}",`)
    }
    builder
      .addThenNewline("async (): Promise<void> => {")
      .indent();
    if (this.props.testName !== undefined) {
      Bespoke
        .new({ name: this.props.testName })
        .run(context, builder);
    } else {
      Bespoke
        .new({ name: this.props.functionName })
        .run(context, builder);
    }
    builder
      .unindent()
      .addThenNewline("},")
      .unindent()
      .addThenNewline(");")
	}

	protected verify(context: IContext): void {
	}
}

export function Jest(
  destination: string,
  tests: string[],
): Module {
  const bespokeImport: Renderable = Bespoke.new({
    name: "imports",
  });
  const beforeAll: Renderable = JestCall.new({
    functionName: "beforeAll",
  });
  const afterAll: Renderable = JestCall.new({
    functionName: "afterAll",
  });
  const beforeEach: Renderable = JestCall.new({
    functionName: "beforeEach",
  });
  const afterEach: Renderable = JestCall.new({
    functionName: "afterEach",
  });
  const testRenders: Renderable[] = tests.map(
    (test: string): Renderable => {
      return JestCall.new({
        functionName: "test",
        testName: test,
      });
    }
  );
  return Module.new({
    content: ([] as Renderable[])
      .concat(bespokeImport, beforeAll, afterAll, beforeEach, afterEach, ...testRenders),
    destination,
  });
}
