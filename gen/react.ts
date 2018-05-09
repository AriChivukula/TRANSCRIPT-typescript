import {
  Module,
  React,
} from "../src/index";

export const simpleReact: Module = React(
  "gen/__codegen__/simpleReact.ts",
  "SimpleReact",
);

export const propsReact: Module = React(
  "gen/__codegen__/propsReact.ts",
  "PropsReact",
);

export const stateReact: Module = React(
  "gen/__codegen__/stateReact.ts",
  "StateReact",
);

export const complexReact: Module = React(
  "gen/__codegen__/complexReact.ts",
  "ComplexReact",
);
