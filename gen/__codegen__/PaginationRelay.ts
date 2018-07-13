/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::PaginationRelay>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<T8JKBGS2XeFhofSVsROovFBC1lmdr0WaFzbu9qpRxdyNoSdrShWw2Otam1FWLXY+p/V20e0meaGvefF8JE4rfg==>>
 */

import * as React from "react";
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

const _PaginationRelay: React.ComponentType = createPaginationContainer(
  __PaginationRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _PaginationRelay as PaginationRelay };
