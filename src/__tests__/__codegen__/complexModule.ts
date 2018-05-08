/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<src/__tests__/examples.ts::complexModule>>
 * BESPOKE<<TEST1, fn3, methodInstance3Bespoke, methodStatic3Bespoke, 3tESt3>>
 * SIGNED<<s0gzV06h8Hjkjkb2IBwcjDlftkeYFMfzpRk4VZCNd4DdPuoWdnoc1tOCmuuhuHIA41To35XpNAsPr4+qnhooQg==>>
 */

import "./p";
import "aqe";
import "ZZZ";

import {
  B,
  c,
} from "a";
import * as aaa from "BbB";
import ooo from "nnn";
import xxx from "www";
import * as zzz from "YYY";

import {
  g,
  r,
  z,
} from "./a";
import fff from "./ddd";
import * as mmm from "./mmm";
import {
  A,
  wA,
} from "./R";

export class MyClass2<T, V> extends MyClass1 {

  /* BESPOKE START <<TEST1>> */
  "DO NOT DELETE"
  /* BESPOKE END <<TEST1>> */

  protected readonly propertyInstance2: number;

  protected readonly static propertyStatic2: number;

  protected abstract methodInstance2<T, V>(
  ): void;

  protected static abstract methodStatic2<T, V>(
  ): void;
}

interface If1<T> {
}

export async function function3(
  var1: string,
  var2: object = {},
): Promise<string[]> {
  /* BESPOKE START <<fn3>> */
  /* BESPOKE END <<fn3>> */
}

let variable3: number | null | undefined = 1;

export interface If2<T, V> {
  item: string;
}

type Ty1<T> = number;

export type Ty2<T, V> = string | null;

export type Ty3 = Ty2 | Ty1;

class MyClass3 extends MyClass1 implements MyInterface1, MyInterface2 {

  private propertyInstance3: string | null;

  private static propertyStatic3: string | null;

  private async methodInstance3(
  ): void {
    /* BESPOKE START <<methodInstance3Bespoke>> */
    /* BESPOKE END <<methodInstance3Bespoke>> */
  }

  private static async methodStatic3(
  ): void {
    /* BESPOKE START <<methodStatic3Bespoke>> */
    /* BESPOKE END <<methodStatic3Bespoke>> */
  }
}

export async function function2<T, V>(
): Promise<string> {
}

export const variable1: string;

/* BESPOKE START <<3tESt3>> */
/* DO NOT DELETE */
/* BESPOKE END <<3tESt3>> */

const variable2: string | undefined = "TEST";

export interface If3 {
  test: null | string;
  test2: If2;
}

function function1<T>(
): void {
}
