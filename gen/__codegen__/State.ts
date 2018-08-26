/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::State>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<fhVzFSd2UFcgAKF6mTJp1f0kzzNYAdamWVjHAo0eclgyI8V7Pua+e1jYiXfLMRMxou1MBh7WtLq/BBnrIMVIjQ==>>
 */

import * as React from "react";
import {
  commitMutation,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IStateProps {
  test1: string;
  data: StateQuery;
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

export { _State as State };
