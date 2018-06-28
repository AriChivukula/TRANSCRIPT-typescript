/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::refetchRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<xjm9E0hRMspwRTRPO6LXL/jfV4+NrO9joTRa+EN/kLPLOh7x319W21eal8FKFT5qKtaiOXyVpkiWvwV+0ha0ug==>>
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

class __RefetchRelay, extends React.Component<IRefetchRelayProps, IRefetchRelayState> {

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

const __RefetchRelay: React.ComponentType = createRefetchContainer(
  ___RefetchRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export const RefetchRelay: React.Component<IRefetchRelayProps, IRefetchRelayState> = polyfill(_RefetchRelay);
