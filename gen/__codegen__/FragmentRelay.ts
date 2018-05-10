/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::fragmentRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<eEGd/rFe0Cn5R7vxW1SJOgE+6QSkJZukrvR7pk4oaFMfAaYqRTwR8wPJJzDtE2oSh5yAreTQu0NKbMllv89myQ==>>
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

export const FragmentRelay: React.ComponentType = createFragmentContainer(
  FragmentRelayImpl,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);
