const assert = require("node:assert");
const { describe, it } = require("node:test");
const obj = require("./gettersAndSetters");

describe("Testing getters", () => {
  it("Should return the expected value using the getter", () => {
    // Note that the getter is called like a prop here, even though it's a function
    const getterResult = obj.latest;

    const expected = "c";

    assert.strictEqual(getterResult, expected);
  });

  it("Shouldn't be possible to change the value of a getter", () => {
    obj.latest = undefined;

    const expected = obj.latest;

    // Even though we just assign undefined to obj.latest the return value hasn't changed
    assert.strictEqual(obj.latest, expected);
  });

  it("Should be possible to enumerate a getter property of a object literal", () => {
    const objKeys = Object.keys(obj);

    // getter properties in classes are not enumerable, different from their behaviour in object literals
    const expected = ["log", "latest"];

    assert.deepStrictEqual(objKeys, expected);
  });
});

describe("Testing setters", () => {
  it("Should correctly update languages with the setter property", () => {
    obj.language = "ptBR";

    const current = obj.languages;

    const expect = ["ptBR"];

    assert.deepStrictEqual(current, expect);
  });
});
