import { Bespoke } from "./bespoke";
import { Builder } from "./builder";
import { Class } from "./class";
import { Function } from "./function";
import { Import } from "./import";
import { Interface } from "./interface";
import { Module } from "./module";
import { IContext, Renderable } from "./renderable";
import { Type } from "./type";

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
      builder.addThenNewline(`"${this.props.testName}",`);
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
      .addThenNewline(");");
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
    (test: string): Renderable => JestCall.new({
      functionName: "test",
      testName: test,
    }),
  );

  return Module.new({
    content: [bespokeImport, beforeAll, afterAll, beforeEach, afterEach, ...testRenders],
    destination,
  });
}

export function React(
  destination: string,
  reactName: string,
  props?: Array<Type.Optional | Type.Required>,
  state?: Array<Type.Optional | Type.Required>,
): Module {
  const reactImport: Renderable = Import.new({
    name: "react",
    withAllAs: "React",
  });
  const bespokeImport: Renderable = Bespoke.new({
    name: "imports",
  });
  let reactClass: Renderable[] = [];
  if (props === undefined && state === undefined) {
    reactClass = [
      Function.newAsyncExported({
        content: [
          Bespoke.new({
            name: reactName,
          }),
        ],
        inTypes: [],
        name: reactName,
        outType: Type.Anonymous.new({
          type: "JSX.Element",
        }),
      }),
    ];
  } else {
    reactClass = [
      Class.newConcreteExported({
        content: [],
        extends: "React.Component",
        name: reactName,
      }),
    ];
    if (state !== undefined) {
      reactClass = [
        Interface.newInternal({
          name: "IState",
          types: state,
        }),
        ...reactClass
      ];
    }
    if (props !== undefined) {
      reactClass = [
        Interface.newInternal({
          name: "IProps",
          types: props,
        }),
        ...reactClass
      ];
    }
  }

  return Module.new({
    content: [reactImport, bespokeImport, ...reactClass],
    destination,
  });
}
