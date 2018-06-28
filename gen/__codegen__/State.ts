/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::stateView>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<0F95+rmjum5CPphgULozIcl0V5/ocxUJ6nJX6uscXIggfhtqRltgrfrg1BtrCLv8t3hB7U5e5bTLtSaBTPcswA==>>
 */

import * as React from "react";
import {
  polyfill,
} from "react-lifecycles-compat";
import {
  commitMutation,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IStateProps {
  test1: string;
}

export interface IStateState {
  test2?: string;
}

class _State extends React.Component<IStateProps, IStateState> {

  public constructor(
    props: IStateProps,
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

polyfill(_State);
export const State: React.Component<IStateProps, IStateState> = _State;
