import { IWritable } from "./internal";

// tslint:disable-next-line
const codegen: IWritable[] = require(process.argv[1]);
codegen.forEach(
  (currentValue: IWritable, index: number): void => {
    // tslint:disable-next-line
    console.log(currentValue.print());
  },
);
