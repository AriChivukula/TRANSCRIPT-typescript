/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::FragmentRelay>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<AJ33cl5O5lFt7YZWXDasdwaVaJZlCn6mr6O7bRzcWLfWZcW+8HuoZJcF9Q0iQ2fQ8fZBbHP5+tyVYlZ9IcO6ew==>>
 */

import * as React from "react";
import {
  createFragmentContainer,
  graphql,
  MappedFragmentProps,
  RemoveRelayProp,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IFragmentRelayProps {
  test1: string;
  data: FragmentRelayQuery;
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

const _FragmentRelay: React.ComponentType<MappedFragmentProps<RemoveRelayProp<IFragmentRelayProps>>> = createFragmentContainer(
  __FragmentRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _FragmentRelay as FragmentRelay };
