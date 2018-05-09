import { Bespoke } from "./bespoke";
import { Builder } from "./builder";
import { Class } from "./class";
import { Function } from "./function";
import { Import } from "./import";
import { Interface } from "./interface";
import { Method } from "./method";
import { Module } from "./module";
import { AnonymousRenderer, TRenderer } from "./renderer";
import { Type } from "./type";

interface IJestCall {
  functionName: string;
  testName?: string;
}

function JestCall(props: IJestCall): AnonymousRenderer {
  return (builder: Builder): void => {
    builder
      .addThenNewline(`${props.functionName}(`)
      .indent();
    if (props.testName !== undefined) {
      builder.addThenNewline(`"${props.testName}",`);
    }
    builder
      .addThenNewline("async (): Promise<void> => {")
      .indent();
    if (props.testName !== undefined) {
      Bespoke
        .new({ name: props.testName })
        .run(builder);
    } else {
      Bespoke
        .new({ name: props.functionName })
        .run(builder);
    }
    builder
      .unindent()
      .addThenNewline("},")
      .unindent()
      .addThenNewline(");");
  };
}

export interface IJest {
  destination: string;
  tests: string[];
}

export function Jest(props: IJest): Module {
  const bespokeImport: TRenderer = Bespoke.new({
    name: "imports",
  });
  const beforeAll: TRenderer = JestCall({
    functionName: "beforeAll",
  });
  const afterAll: TRenderer = JestCall({
    functionName: "afterAll",
  });
  const beforeEach: TRenderer = JestCall({
    functionName: "beforeEach",
  });
  const afterEach: TRenderer = JestCall({
    functionName: "afterEach",
  });
  const testRenders: TRenderer[] = props.tests.map(
    (test: string): TRenderer => JestCall({
      functionName: "test",
      testName: name,
    }),
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
    destination: props.destination,
  });
}

function ReactConstructorCall(): AnonymousRenderer {
  return (builder: Builder): void => {
    builder
      .addThenNewline("super(props);")
      .addThenNewline("this.state = {")
      .indent();
    Bespoke
      .new({ name: "state" })
      .run(builder);
    builder
      .unindent()
      .addThenNewline("};");
  };
}

export enum RelayType {
  FRAGMENT = "createFragmentContainer",
  PAGINATION = "createPaginationContainer",
  REFETCH = "createRefetchContainer",
}

export interface IReact {
  destination: string;
  name: string;
  props?: Array<Type.Optional | Type.Required>;
  state?: Array<Type.Optional | Type.Required>;
}

export function React(props: IReact): Module {
  const reactImport: TRenderer = Import.new({
    name: "react",
    withAllAs: "React",
  });
  const bespokeImport: TRenderer = Bespoke.new({
    name: "imports",
  });
  let reactClass: TRenderer[];
  if (props.props === undefined) {
    reactClass = [
      Function.newSyncExported({
        content: [
          Bespoke.new({
            name: "render",
          }),
        ],
        inTypes: [],
        name: props.name,
        outType: Type.Anonymous.new({
          type: "JSX.Element",
        }),
      }),
    ];
  } else {
    const propsName: string = `I${props.name}Props`;
    let reactExtends: string = `React.Component<${propsName}`;
    reactClass = [
      Interface.newExported({
        name: propsName,
        types: props.props,
      }),
    ];
    let constructor: TRenderer[] = [];
    if (props.state !== undefined) {
      const stateName: string = `I${props.name}State`;
      reactExtends += `, ${stateName}>`;
      reactClass = [
        ...reactClass,
        Interface.newExported({
          name: stateName,
          types: props.state,
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
        name: props.name,
      }),
    ];
  }

  return Module.new({
    content: [reactImport, bespokeImport, ...reactClass],
    destination: props.destination,
  });
}
