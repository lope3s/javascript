import assert from "node:assert";
import { describe, it } from "node:test";
import { myObject, getPrototypeChain } from "./prototype.mjs";

describe("Testing object prototypes", () => {
  it("Should return the Object.prototype for myObject", () => {
    const myObjectPrototye = Object.getPrototypeOf(myObject);

    assert.deepStrictEqual(myObjectPrototye, Object.prototype);
  });

  it("Should return all the prototype chain for an object and null at the end", () => {
    const myDate = new Date();

    const copyDate = Object.create(myDate);

    const actual = getPrototypeChain(copyDate);

    const expected = [myDate, Date.prototype, Object.prototype, null];

    assert.deepStrictEqual(actual, expected);
  });

  it("Should shadow properties with the same name down in the prototye chain", () => {
    const actual = myObject.toString();

    const expected = "I'm not a [Object object]";

    assert.strictEqual(actual, expected);
  });

  it("Should reffer to the inheriting object context when using this in a inherited function", () => {
    // getName() is a function inherited by myObject prototype, it returns this.name;
    // as this method is beeing inherited it should return the inheriting object name, not the name
    // of the object which owns the method, in that case undefined;
    const myObjectName = myObject.getName();

    const expected = "myObject";

    assert.strictEqual(myObjectName, expected);

    // this is actually a result of property shadowing, if you delete the name property from the inheriting object:
    delete myObject.name;

    const myObjectPrototypeName = myObject.getName();

    // As the property doesn't exist in the inheriting object anymore, it'll be sought in object's prototype chain;
    const expectPrototypeNameToBe = "Object.prototype";

    assert.strictEqual(myObjectPrototypeName, expectPrototypeNameToBe);
  });

  it("Should set a method for all array instances", () => {
    const mySymbol = Symbol.for("greet");

    // Here we are extending a built-in prototype to include our own logic as default for every Array instance;
    // This is called monkey patching, and it's not a good pratice to be done with literal names as the language might
    // add a method with the same name in the future that can break your code, that's why we are using a Symbol here,
    // to ensure that the identifier of our function will aways be unique;
    Array.prototype[mySymbol] = function () {
      return "greetings!";
    };

    const anArrayThatComplements = [][mySymbol]();

    assert.strictEqual(anArrayThatComplements, "greetings!");
  });
});
