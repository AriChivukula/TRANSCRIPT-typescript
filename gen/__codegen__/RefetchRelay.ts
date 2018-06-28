/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::refetchRelayView>>
 * BESPOKE<<imports, state, render, implementation, relay>>
 * SIGNED<<8pSFiipVxCx6CIo2OZ+ENJv21rWqszSyMwnr4sw132zlCDCMC+UQeyeFJ0728tbsUgjhhTDZchx3wZw7ODeNOw==>>
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

class RefetchRelayImpl extends React.Component<IRefetchRelayProps, IRefetchRelayState> {

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

export const RefetchRelay: React.ComponentType = createRefetchContainer(
  RefetchRelayImpl,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);
