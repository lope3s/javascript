import assert from "node:assert";
import { beforeEach, describe, it } from "node:test";

import { Character, Weapon } from "./gameCharacterCreation.mjs";

describe("Testing Game character creation objects", () => {
  let character;

  beforeEach(() => {
    character = new Character("us0p");
  });

  it("Should return a object with the defaults property of a begginer character", () => {
    assert.strictEqual(character.name, "us0p");
    assert.strictEqual(character.class, "traveler");
    assert.strictEqual(character.power, 10);
    assert.strictEqual(character.inteligence, 10);
    assert.strictEqual(character.weapon, null);
  });

  it("Should increase power by 5 on every call", () => {
    character.workout();

    assert.deepEqual(character.power, 15);
  });

  it("Should increase inteligence by 5 on every call", () => {
    character.study();

    assert.deepEqual(character.inteligence, 15);
  });

  it("Should promote the character to warrior if its power is 30 or higher", () => {
    character.power = 30;

    const characterSuccesfulRecruited = character.recruit();

    assert.deepEqual(characterSuccesfulRecruited, true);
    assert.strictEqual(character.class, "warrior");
  });

  it("Shouldn't promote the character to warrior if its power is less than 30", () => {
    const characterWereNotRecruited = character.recruit();

    assert.deepEqual(characterWereNotRecruited, false);
    assert.strictEqual(character.class, "traveler");
  });

  it("Shouldn't promote the character if it already have a class", () => {
    character.power = 30;
    character.class = "mage";

    const characterWereNotRecruited = character.recruit();

    assert.deepEqual(characterWereNotRecruited, false);
    assert.strictEqual(character.class, "mage");
  });

  it("Should promote the character to mage if its inteligence is 30 or higher", () => {
    character.inteligence = 30;

    const characterSuccesfulGraduated = character.graduate();

    assert.deepEqual(characterSuccesfulGraduated, true);
    assert.strictEqual(character.class, "mage");
  });

  it("Shouldn't promote the character to mage if its inteligence is less than 30", () => {
    const characterWereNotGraduated = character.graduate();

    assert.deepEqual(characterWereNotGraduated, false);
    assert.strictEqual(character.class, "traveler");
  });

  it("Shouldn't promote the character if it already have a class", () => {
    character.inteligence = 30;
    character.class = "warrior";

    const characterWereNotGraduated = character.graduate();

    assert.deepEqual(characterWereNotGraduated, false);
    assert.strictEqual(character.class, "warrior");
  });

  it("Should return a different kind of type accodingly to the character class", () => {
    const travelerWeapon = new Weapon("traveler");

    assert.strictEqual(travelerWeapon.type, null);

    character.class = "mage";

    const mageWeapon = new Weapon("mage");

    assert.strictEqual(mageWeapon.type, "wand");

    character.class = "warrior";

    const warriorWeapon = new Weapon("warrior");

    assert.strictEqual(warriorWeapon.type, "sword");
  });
});
