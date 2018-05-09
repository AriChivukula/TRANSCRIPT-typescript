# TypeScript Codegen

## Setup

1. `npm install --save-dev typescriptase ts-node`
1. Write a file with a named export for a `Module`
2. `npx ts-node node_modules/.bin/typescriptase --files FILE_GLOB`

## API

### External

* [Alias](https://github.com/arichiv/typescriptase/blob/master/src/alias.ts)
* [Bespoke](https://github.com/arichiv/typescriptase/blob/master/src/bespoke.ts)
* [Class](https://github.com/arichiv/typescriptase/blob/master/src/class.ts)
* [Enum](https://github.com/arichiv/typescriptase/blob/master/src/enum.ts)
* [Function](https://github.com/arichiv/typescriptase/blob/master/src/function.ts)
* [Import](https://github.com/arichiv/typescriptase/blob/master/src/import.ts)
* [Interface](https://github.com/arichiv/typescriptase/blob/master/src/interface.ts)
* [Macro](https://github.com/arichiv/typescriptase/blob/master/src/macro.ts)
* [Method](https://github.com/arichiv/typescriptase/blob/master/src/method.ts)
* [Module](https://github.com/arichiv/typescriptase/blob/master/src/module.ts)
* [Namespace](https://github.com/arichiv/typescriptase/blob/master/src/namespace.ts)
* [Property](https://github.com/arichiv/typescriptase/blob/master/src/property.ts)
* [Type](https://github.com/arichiv/typescriptase/blob/master/src/type.ts)
* [Variable](https://github.com/arichiv/typescriptase/blob/master/src/variable.ts)

### Internal

* [Builder](https://github.com/arichiv/typescriptase/blob/master/src/builder.ts)
* [Renderable](https://github.com/arichiv/typescriptase/blob/master/src/renderable.ts)

## Examples

* [API](https://github.com/arichiv/typescriptase/blob/master/src/__tests__/examples.ts)
* [React Macros](https://github.com/arichiv/typescriptase/blob/master/gen/views.ts)
* [Test Macros](https://github.com/arichiv/typescriptase/blob/master/gen/tests.ts)
