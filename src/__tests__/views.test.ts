/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/tests.ts::viewsTest>>
 * BESPOKE<<imports, beforeAll, afterAll, beforeEach, afterEach, simpleView, propsView, stateView, fragmentRelayView, paginationRelayView, refetchRelayView>>
 * SIGNED<<iN9XEf7i1TWbU0KPmPX6rERE/SvM/n74FJOVkqnV5Mhmqf5hyPGndY0N1dsAHeKYZ/Rmb8f6kY6x6vsULoGvkA==>>
 */

/* BESPOKE START <<imports>> */
import {
  fragmentRelayView,
  paginationRelayView,
  propsView,
  refetchRelayView,
  simpleView,
  stateView,
} from "../../gen/views";
/* BESPOKE END <<imports>> */

beforeAll(
  async (): Promise<void> => {
    /* BESPOKE START <<beforeAll>> */
    /* BESPOKE END <<beforeAll>> */
  },
);

afterAll(
  async (): Promise<void> => {
    /* BESPOKE START <<afterAll>> */
    /* BESPOKE END <<afterAll>> */
  },
);

beforeEach(
  async (): Promise<void> => {
    /* BESPOKE START <<beforeEach>> */
    /* BESPOKE END <<beforeEach>> */
  },
);

afterEach(
  async (): Promise<void> => {
    /* BESPOKE START <<afterEach>> */
    /* BESPOKE END <<afterEach>> */
  },
);

test(
  "simpleView",
  async (): Promise<void> => {
    /* BESPOKE START <<simpleView>> */
    expect(simpleView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<simpleView>> */
  },
);

test(
  "propsView",
  async (): Promise<void> => {
    /* BESPOKE START <<propsView>> */
    expect(propsView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<propsView>> */
  },
);

test(
  "stateView",
  async (): Promise<void> => {
    /* BESPOKE START <<stateView>> */
    expect(stateView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<stateView>> */
  },
);

test(
  "fragmentRelayView",
  async (): Promise<void> => {
    /* BESPOKE START <<fragmentRelayView>> */
    expect(fragmentRelayView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<fragmentRelayView>> */
  },
);

test(
  "paginationRelayView",
  async (): Promise<void> => {
    /* BESPOKE START <<paginationRelayView>> */
    expect(paginationRelayView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<paginationRelayView>> */
  },
);

test(
  "refetchRelayView",
  async (): Promise<void> => {
    /* BESPOKE START <<refetchRelayView>> */
    expect(refetchRelayView.print())
      .toMatchSnapshot();
    /* BESPOKE END <<refetchRelayView>> */
  },
);
