/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::PaginationRelay>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<Jtj2Bqs8keXUAeP3yuOAf8wd+shRbvOjuklmoUdgRsngffdL8FmMRY9zuLAW1JjJF3p5yRuZ3Z3fxzhnV5IHFw==>>
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

class __PaginationRelay extends <IPaginationRelayProps> {

  public render(
  ): JSX.Element {
    /* BESPOKE START <<render>> */
    /* BESPOKE END <<render>> */
  }

  /* BESPOKE START <<implementation>> */
  /* BESPOKE END <<implementation>> */
}

const _PaginationRelay: React.ComponentType<IPaginationRelayProps> = createPaginationContainer(
  __PaginationRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _PaginationRelay as PaginationRelay };
