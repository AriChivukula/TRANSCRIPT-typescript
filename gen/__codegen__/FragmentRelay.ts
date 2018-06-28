/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::fragmentRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<KCcRsWvI5VURL5ffx/hmd1wEjLt+Sikg5O2j2Pg2ModZl8inTRK8oijE91X/JyzUxuQOGa0krP0di9/zGEt6QQ==>>
 */

import * as React from "react";
import {
  polyfill,
} from "react-lifecycles-compat";
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

class FragmentRelayImpl extends React.Component<IFragmentRelayProps, IFragmentRelayState> {

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

const FragmentRelay: React.ComponentType = createFragmentContainer(
  FragmentRelayImpl,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);
