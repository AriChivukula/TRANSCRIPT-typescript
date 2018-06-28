/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::paginationRelayView>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<cmNQIRFvpgB8bciFzV5FYzQbDzaaBstPgEb6wbxi+pZ+HvvVQBeoMhFkSE/2tSzMCcFBGAASxAyUf0NssaFfAA==>>
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

const _PaginationRelay: React.ComponentType = createPaginationContainer(
  __PaginationRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

// @ts-lint

export const PaginationRelay: React.Component<IPaginationRelayProps> = polyfill(_PaginationRelay);
