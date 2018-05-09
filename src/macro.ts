import { Bespoke } from "./bespoke";
import { Builder } from "./builder";
import { Class } from "./class";
import { Function } from "./function";
import { Import } from "./import";
import { Interface } from "./interface";
import { Method } from "./method";
import { Module } from "./module";
import { AnonymousRenderer, IContext, TRenderer } from "./renderer";
import { Type } from "./type";

function JestCall(functionName: string, testName?: string): AnonymousRenderer {
  return (context: IContext, builder: Builder): void => {
    builder
      .addThenNewline(`${functionName}(`)
      .indent();
    if (testName !== undefined) {
      builder.addThenNewline(`"${testName}",`);
    }
    builder
      .addThenNewline("async (): Promise<void> => {")
      .indent();
    if (testName !== undefined) {
      Bespoke
        .new({ name: testName })
        .run(context, builder);
    } else {
      Bespoke
        .new({ name: functionName })
        .run(context, builder);
    }
    builder
      .unindent()
      .addThenNewline("},")
      .unindent()
      .addThenNewline(");");
  };
}

export function Jest(
  destination: string,
  tests: string[],
): Module {
  const bespokeImport: TRenderer = Bespoke.new({
    name: "imports",
  });
  const beforeAll: TRenderer = JestCall("beforeAll");
  const afterAll: TRenderer = JestCall("afterAll");
  const beforeEach: TRenderer = JestCall("beforeEach");
  const afterEach: TRenderer = JestCall("afterEach");
  const testRenders: TRenderer[] = tests.map(
    (test: string): TRenderer => JestCall("test", test),
  );

  return Module.new({
    content: [
      bespokeImport,
      beforeAll,
      afterAll,
      beforeEach,
      afterEach,
      ...testRenders,
    ],
    destination,
  });
}

function ReactConstructorCall(): AnonymousRenderer {
  return (context: IContext, builder: Builder): void => {
    builder
      .addThenNewline("super(props);")
      .addThenNewline("this.state = {")
      .indent();
    Bespoke
      .new({ name: "state" })
      .run(context, builder);
    builder
      .unindent()
      .addThenNewline("};");
  };
}

export function React(
  destination: string,
  reactName: string,
  props?: Array<Type.Optional | Type.Required>,
  state?: Array<Type.Optional | Type.Required>,
): Module {
  const reactImport: TRenderer = Import.new({
    name: "react",
    withAllAs: "React",
  });
  const bespokeImport: TRenderer = Bespoke.new({
    name: "imports",
  });
  let reactClass: TRenderer[];
  if (props === undefined) {
    reactClass = [
      Function.newSyncExported({
        content: [
          Bespoke.new({
            name: "render",
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
    const propsName: string = `I${reactName}Props`;
    let reactExtends: string = `React.Component<${propsName}`;
    reactClass = [
      Interface.newExported({
        name: propsName,
        types: props,
      }),
    ];
    let constructor: TRenderer[] = [];
    if (state !== undefined) {
      const stateName: string = `I${reactName}State`;
      reactExtends += `, ${stateName}>`;
      reactClass = [
        ...reactClass,
        Interface.newExported({
          name: stateName,
          types: state,
        }),
      ];
      constructor = [
        Method.Instance.Public.newConstructor({
          content: [
            ReactConstructorCall(),
          ],
          inTypes: [
            Type.Argument.new({
              name: "props",
              type: propsName,
            }),
          ],
        }),
      ];
    } else {
      reactExtends += ">";
    }
    reactClass = [
      ...reactClass,
      Class.newConcreteExported({
        content: [
          ...constructor,
          Method.Instance.Public.newSync({
            content: [
              Bespoke.new({
                name: "render",
              }),
            ],
            inTypes: [],
            name: "render",
            outType: Type.Anonymous.new({
              type: "JSX.Element",
            }),
          }),
          Bespoke.new({
            name: "implementation",
          }),
        ],
        extends: reactExtends,
        name: reactName,
      }),
    ];
  }

  return Module.new({
    content: [reactImport, bespokeImport, ...reactClass],
    destination,
  });
}
