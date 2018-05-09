/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<src/__tests__/examples.ts::complexModule>>
 * BESPOKE<<TEST1, methodInstance4, methodInstance3Bespoke, methodStatic3Bespoke, fn3, 3tESt3>>
 * SIGNED<<rE5JX5iPKxIHfLP2Zr1oylDQz1QTpt42eboIkyAAV2qaarzKKzUgO/0y0tPEK0xaLyuoa08mQw/dWnBqhXnUyw==>>
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

export namespace namespace2 {

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

    private constructor(
      var1: string,
      public readonly var5: string,
    ) {
      /* BESPOKE START <<methodInstance4>> */
      /* BESPOKE END <<methodInstance4>> */
    }
  }

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

    public abstract constructor(
    );
  }
}

interface If1<T> {
  kind: "IF1";
  methodInstance6<T>(
    var1: string,
    var2: object,
  ): Promise<string[]>;
}

export async function function3(
  var1: string,
  var2: object = {},
): Promise<string[]> {
  /* BESPOKE START <<fn3>> */
  /* BESPOKE END <<fn3>> */
}

let variable3: number | null | undefined = 1;

export interface If2<T, V> extends interface1 {
  item: string;
}

type Ty1<T> = number;

export type Ty2<T, V> = string | null;

export type Ty3 = Ty2 | Ty1;

export async function function2<T, V>(
): Promise<string> {
}

export const variable1: string;

/* BESPOKE START <<3tESt3>> */
/* DO NOT DELETE */
/* BESPOKE END <<3tESt3>> */

const variable2: string | undefined = "TEST";

export interface If3 extends interface1, interface2 {
  test: null | string;
  test2: If2;
}

function function1<T>(
): void {
}
