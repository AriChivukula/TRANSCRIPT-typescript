/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::paginationRelayView>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<8Q0bO2m20bd4r2AOvYYcQHTPGRmWYEtJcTC+frKR50VpLcLcKog8O6m1M3VF2rb15QTFRzbarWRwyU2u5JNsVQ==>>
 */

import * as React from "react";
import {
  polyfill,
} from "react-lifecycles-compat";
import {
  createPaginationContainer,
  graphql,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IPaginationRelayProps {
  test1: string;
}

class PaginationRelayImpl extends React.Component<IPaginationRelayProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

const PaginationRelay: React.ComponentType = createPaginationContainer(
  PaginationRelayImpl,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);
