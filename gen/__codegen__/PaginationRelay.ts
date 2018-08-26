/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/views.ts::PaginationRelay>>
 * BESPOKE<<imports, render, implementation, relay>>
 * SIGNED<<U4zNpbZCKuTGRuTTLg5QGwWM44HzrQbRgOu85BFoW7wrGHcHC8pDMNod41JjIoXLtBNtxrx/TtNy2qDqJU7/IA==>>
 */

import * as React from "react";
import {
  createPaginationContainer,
  graphql,
  MappedFragmentProps,
  RemoveRelayProp,
} from "react-relay";

/* BESPOKE START <<imports>> */
/* BESPOKE END <<imports>> */

export interface IPaginationRelayProps {
  test1: string;
  data: PaginationRelayQuery;
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

const _PaginationRelay: React.ComponentType<MappedFragmentProps<RemoveRelayProp<IPaginationRelayProps>>> = createPaginationContainer(
  __PaginationRelay,
  /* BESPOKE START <<relay>> */
  /* BESPOKE END <<relay>> */
);

export { _PaginationRelay as PaginationRelay };
