import {
  Interface,
  Module,
  React,
  Type,
} from "../src/index";

export const simpleReact: Module = React(
  "gen/__codegen__/simpleReact.ts",
  "SimpleReact",
);

export const propsReact: Module = React(
  "gen/__codegen__/propsReact.ts",
  "PropsReact",
  [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
);

export const stateReact: Module = React(
  "gen/__codegen__/stateReact.ts",
  "StateReact",
  undefined,
  [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
);

export const complexReact: Module = React(
  "gen/__codegen__/complexReact.ts",
  "ComplexReact",
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
