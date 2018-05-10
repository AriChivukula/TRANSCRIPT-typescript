/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::paginationRelayView>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<KAOJPr9mlyxVJEKun1Uw0j9GnDOSeL4RDNb/31B0aigQSMbeuq5XSnmhAH8rxeyP/WbeZXOT6xof81JIZ+efnQ==>>
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

class PaginationRelayImpl extends React.Component<IPaginationRelayProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

export const PaginationRelay: React.ComponentType = createPaginationContainer(
  PaginationRelayImpl,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);
