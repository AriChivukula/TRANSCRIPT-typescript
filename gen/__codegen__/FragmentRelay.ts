/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::FragmentRelay>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<YsjKdN9/D/UUMTiPoIPBFWYsxcJqneGWcYhmHAMzRC4M8AHRkSIN2fZIQsORzK7H0ghtNlO6hLnKuUZByHe0BA==>>
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

const _FragmentRelay: React.ComponentType<IFragmentRelayProps> = createFragmentContainer(
  __FragmentRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _FragmentRelay as FragmentRelay };
