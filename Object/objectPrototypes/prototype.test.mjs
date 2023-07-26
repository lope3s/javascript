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
});
