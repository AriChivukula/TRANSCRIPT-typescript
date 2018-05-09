import {
  Interface,
  Module,
  React,
  Type,
} from "../src/index";

export const simpleView: Module = React(
  "gen/__codegen__/Simple.ts",
  "Simple",
);

export const propsView: Module = React(
  "gen/__codegen__/Props.ts",
  "Props",
  [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
);

export const stateView: Module = React(
  "gen/__codegen__/State.ts",
  "State",
  [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
);
