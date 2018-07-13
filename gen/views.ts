import {
  ERelayType,
  Module,
  React,
  Type,
} from "../src/index";

export const Simple: Module = React({
  destination: "gen/__codegen__/Simple.ts",
  name: "Simple",
});

export const Props: Module = React({
  destination: "gen/__codegen__/Props.ts",
  name: "Props",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
});

export const State: Module = React({
  destination: "gen/__codegen__/State.ts",
  name: "State",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  relayMutation: true,
  state: [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
});

export const FragmentRelay: Module = React({
  destination: "gen/__codegen__/FragmentRelay.ts",
  name: "FragmentRelay",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  relayType: ERelayType.FRAGMENT,
  state: [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
});

export const PaginationRelay: Module = React({
  destination: "gen/__codegen__/PaginationRelay.ts",
  name: "PaginationRelay",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  relayType: ERelayType.PAGINATION,
});

export const RefetchRelay: Module = React({
  destination: "gen/__codegen__/RefetchRelay.ts",
  name: "RefetchRelay",
  props: [
    Type.Required.new({
      name: "test1",
      type: "string",
    }),
  ],
  relayMutation: true,
  relayType: ERelayType.REFETCH,
  state: [
    Type.Optional.new({
      name: "test2",
      type: "string",
    }),
  ],
});
