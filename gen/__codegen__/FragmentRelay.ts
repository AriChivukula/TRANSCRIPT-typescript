/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::fragmentRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<suEtL7dVNshxoBJ69xN8vLx6/sAl9JPEQDTKPzkyiJDm33mRqm1nLyUWa/Y2fZG8mGPaQpxTuUVhqCoxTldJHw==>>
 */

import * as React from "react";
import {
  createFragmentContainer,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IFragmentRelayProps {
  test1: string;
}

export interface IFragmentRelayState {
  test2?: string;
}

class __FragmentRelay extends React.Component<IFragmentRelayProps, IFragmentRelayState> {

  public constructor(
    props: IFragmentRelayProps,
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

const _FragmentRelay: React.ComponentType = createFragmentContainer(
  __FragmentRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _FragmentRelay as FragmentRelay };
