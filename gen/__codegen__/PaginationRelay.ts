/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::paginationRelayView>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<GShg1XlwjwuYqa7//Mo3/nmMUXmHxirxytLn2paXPJ2lcpG+eNB42ZZ00jcwZog3OTJjY4Q0ebhl4Vm49LbuEA==>>
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

polyfill(_PaginationRelay);
export const PaginationRelay: React.Component<IPaginationRelayProps> = _PaginationRelay;
