/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::FragmentRelay>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<zPaNr9OENo7wpvD+//F97wnNnx6sHQZgPqCuRuxlzb4duZgh4l9L+Eit8ncwcl/Y41YUtMkLOQ/cDfDzRdNZQA==>>
 */

import * as React from "react";
import {
  _FragmentRefs,
  createFragmentContainer,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IFragmentRelayProps {
  test1: string;
  data: _FragmentRefs<FragmentRelayQuery>;
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
  graphql`,
    fragment FragmentRelayQuery on Query {
    /* BESPOKE START <<relay>> */
    /* BESPOKE END <<relay>> */
    }
  `,
);

export { _FragmentRelay as FragmentRelay };
