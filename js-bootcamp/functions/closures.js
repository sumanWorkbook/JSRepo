const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};
const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.get());

//Adder
const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add = (a, b) => a + b;
const add10 = createAdder(10);
console.log(add10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(-90));

// Tipper

100 * 15;
const createTipper = (tip) => {
  return (tipAmt) => {
    return tipAmt * tip;
  };
};

const tip = createTipper(0.15);
console.log("Tip=" + tip(100));
