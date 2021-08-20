import { assert } from "console";

type Counter = () => number;

// 6.2.5 (1)
function nextNumberByClosure(): Counter {
  let a = 0;
  let b = 1;

  return () => {
    const result = a + b;
    a = b;
    b = result;

    return result;
  };
}

const closureCounter = nextNumberByClosure();

assert(closureCounter() === 1);
assert(closureCounter() === 2);
assert(closureCounter() === 3);
assert(closureCounter() === 5);
assert(closureCounter() === 8);

// 6.2.5 (2)
function* nextNumberByGenerator(): IterableIterator<number> {
  let a = 0;
  let b = 1;

  while (true) {
    const result = a + b;
    yield a + b;

    a = b;
    b = result;
  }
}

const generatorCounter = nextNumberByGenerator();

assert(generatorCounter.next().value === 1);
assert(generatorCounter.next().value === 2);
assert(generatorCounter.next().value === 3);
assert(generatorCounter.next().value === 5);
assert(generatorCounter.next().value === 8);
