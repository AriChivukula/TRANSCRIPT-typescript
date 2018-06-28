/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::refetchRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<X1dW+Lc7IB3tkVS/SQCw4vPJ8Fvhg6JVvk1uy7xlRsBqFg4I+gjoU4qlItT6tjGXlm5rE6Z3/DREMQMfEU5SSg==>>
 */

import * as React from "react";
import {
  polyfill,
} from "react-lifecycles-compat";
import {
  commitMutation,
  createRefetchContainer,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IRefetchRelayProps {
  test1: string;
}

export interface IRefetchRelayState {
  test2?: string;
}

class _RefetchRelay extends React.Component<IRefetchRelayProps, IRefetchRelayState> {

  public constructor(
    props: IRefetchRelayProps,
  ) {
    super(props);
    this.state = {
      /* BESPOKE START <<state>> */
      /* BESPOKE END <<state>> */
    };
  }

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

const RefetchRelay: React.ComponentType = createRefetchContainer(
  _RefetchRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export const RefetchRelay: React.Component<IRefetchRelayProps, IRefetchRelayState> = polyfill(_RefetchRelay);
