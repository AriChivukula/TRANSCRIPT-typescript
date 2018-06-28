/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::paginationRelayView>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<k+Gs98ZMMIEAXTpGEbcclPnPbGAMzQ8dCDk0vZ7KdVCw+hhzjU5SBw8As3VxEvkm2Rvy8x8Lh9hradoprDPFHw==>>
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

class __PaginationRelay extends React.Component<IPaginationRelayProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

polyfill(__PaginationRelay);
const _PaginationRelay: React.ComponentType = createPaginationContainer(
  __PaginationRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _PaginationRelay as PaginationRelay };
