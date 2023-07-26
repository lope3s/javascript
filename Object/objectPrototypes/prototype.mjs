export const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

const objectPrototye = Object.getPrototypeOf(myObject);
console.log(objectPrototye); // [Object null prototype] {} -> This is the Object.prototype the most basic prototype.

const endOfChain = Object.getPrototypeOf(objectPrototye);
console.log(endOfChain); // null

export function getPrototypeChain(obj) {
  let object = obj;

  const prototypeChain = [];

  while (object) {
    const prototype = Object.getPrototypeOf(object);

    prototypeChain.push(prototype);

    object = prototype;
  }

  return prototypeChain;
}

// As property resolution is made from top to bottom, defining a property that is already
// defined in the prototype chain will shadow the property in the prototype chain;
// This is called shadowing the property;
myObject.toString = function () {
  return "I'm not a [Object object]";
};
