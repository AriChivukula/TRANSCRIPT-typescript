/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::stateView>>
 * BESPOKE<<imports, state, render, implementation>>
 * SIGNED<<DRz+3lXXxUR+qlURvEcRBKP/sKJkV8AAbz9Sx6fmEeL8DrqNXw0KjGuBya7e/mlzchZ7UuW+0Nja3sTcUVLpjg==>>
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
