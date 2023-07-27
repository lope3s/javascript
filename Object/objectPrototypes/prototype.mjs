Object.prototype.name = "Object.prototype";
Object.prototype.getName = function () {
  return this.name;
};

export const myObject = {
  name: "myObject",
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

function Bar() {
  this.foo = "foo";
}

// Bar.prototype doesn't refers to the prototype of Bar, but to the property "prototype" within the Bar object;
// this property is used as prototype for every object constructed by Bar;
// If you set the property "fName" on Bar, you'll see that it's not present in its prototype, because prototype here
// its a property of Bar;
Bar.prototype.fName = "baz";

// If you set the property within the Bar prototype directly, then you get both objects with the same property
//Function.prototype.fName = "foo";

console.log(Bar.fName); // baz
console.log(Function.prototype.fName); // undefined
