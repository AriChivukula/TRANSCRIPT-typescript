import {
  Interface,
  Module,
  React,
  Type,
} from "../src/index";

export const simpleView: Module = React({
  destination: "gen/__codegen__/Simple.ts",
  name: "Simple",
});

export const propsView: Module = React({
  destination: "gen/__codegen__/Props.ts",
  name: "Props",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
});

export const stateView: Module = React({
  destination: "gen/__codegen__/State.ts",
  name: "State",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  state: [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
});
