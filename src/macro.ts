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
      testName: test,
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

interface IRelayContainerCall {
  name: string;
  relayType: ERelayType;
  extendsType: string;
}

function RelayContainerCall(props: IRelayContainerCall): AnonymousRenderer {
  return (builder: Builder): void => {
    builder
      .addThenNewline(`const _${props.name}: React.ComponentType${props.extendsType} = ${props.relayType}(`)
      .indent()
      .addThenNewline(`__${props.name},`);
    Bespoke
      .new({
        name: "relay",
      })
      .run(builder);
    builder
      .unindent()
      .addThenNewline(");");
  };
}

export enum ERelayType {
  FRAGMENT = "createFragmentContainer",
  PAGINATION = "createPaginationContainer",
  REFETCH = "createRefetchContainer",
}

export interface IReact {
  destination: string;
  name: string;
  props?: Array<Type.Optional | Type.Required>;
  relayMutation?: boolean;
  relayType?: ERelayType;
  state?: Array<Type.Optional | Type.Required>;
}

export function React(props: IReact): Module {
  let extendsType = ``;
  let content: TRenderer[] = [
    Import.new({
      name: "react",
      withAllAs: "React",
    }),
    Bespoke.new({
      name: "imports",
    }),
  ];
  if (props.props === undefined) {
    content = [
      ...content,
      Function.Sync.newExported({
        content: [
          Bespoke.new({
            name: "render",
          }),
        ],
        inTypes: [],
        name: `_${props.name}`,
        outType: Type.Anonymous.new({
          type: "JSX.Element",
        }),
      }),
    ];
  } else {
    const propsName: string = `I${props.name}Props`;
    extendsType += `<${propsName}`;
    content = [
      ...content,
      Interface.newExported({
        name: propsName,
        types: props.props,
      }),
    ];
    let constructor: TRenderer[] = [];
    if (props.state !== undefined) {
      const stateName: string = `I${props.name}State`;
      extendsType += `, ${stateName}>`;
      content = [
        ...content,
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
      extendsType += ">";
    }
    const classContent: TRenderer[] = [
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
    ];
    if (props.relayType === undefined) {
      content = [
        ...content,
        Class.Concrete.newInternal({
          content: classContent,
          extends: `React.Component${extendsType}`,
          name: `_${props.name}`,
        }),
      ];
      if (props.relayMutation === true) {
        content = [
          ...content,
          Import.new({
            name: "react-relay",
            with: ["commitMutation", "graphql"],
          }),
        ];
      }
    } else {
      content = [
        ...content,
        Class.Concrete.newInternal({
          content: classContent,
          extends: extendsType,
          name: `__${props.name}`,
        }),
      ];
      let relayImports: string[] = ["graphql", props.relayType];
      if (props.relayMutation === true) {
        relayImports = [...relayImports, "commitMutation"];
      }
      content = [
        ...content,
        Import.new({
          name: "react-relay",
          with: relayImports,
        }),
        RelayContainerCall({
          name: props.name,
          relayType: props.relayType,
          extendsType,
        }),
      ];
    }
  }
  
  content = [
    ...content,
    (builder: Builder): void => {
      builder.addThenNewline(`export { _${props.name} as ${props.name} };`);
    },
  ];

  return Module.new({
    content,
    destination: props.destination,
  });
}
