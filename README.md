# mmorpg-client
Web based mmorpg

To install dependencies:

```bash
npm install
```

To run:

```bash
npm run dev
```

## General Programming Conventions

### Variables
```ts
const example = "";
let exmapleTest = "";
```

### Types/Interfaces
```ts
type Example = {};
interface IExample {};
```

### Enums
```ts
enum EXAMPLES {
  EXAMPLE_ONE
  EXAMPLE_TWO
}
enum EXAMPLES_VALUE {
  EXAMPLE_ONE = "EXAMPLE_ONE"
  EXAMPLE_TWO = "EXAMPLE_TWO"
}
```

### Classes
Should be single file and represent conctrete instanciable objects that could contain behavior

```some-example.class.ts```

```ts
class SomeExampleClass {}
```

### Services
Should be single file, single topic, used when we need to save some type of state, so we create a class that contains the logic and necessary public/private properties

```some-example.service.ts```
```ts
class SomeExampleServiceClass {}
export const SomeExampleService = new SomeExampleServiceClass()
```


### Handlers
Should contain logic around a specific topic that does not require any type of state

```file-name.handler.ts```

