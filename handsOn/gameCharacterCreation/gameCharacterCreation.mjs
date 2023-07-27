export function Character(name) {
  this.name = name;
  this.class = "traveler";
  this.power = 10;
  this.inteligence = 10;
  this.weapon = null;
}

Character.prototype.workout = function () {
  this.power += 5;
};

Character.prototype.study = function () {
  this.inteligence += 5;
};

Character.prototype.recruit = function () {
  if (this.power >= 30 && this.class === "traveler") {
    this.class = "warrior";
    return true;
  }

  return false;
};

Character.prototype.graduate = function () {
  if (this.inteligence >= 30 && this.class === "traveler") {
    this.class = "mage";
    return true;
  }

  return false;
};

export function Weapon(characterClass) {
  if (characterClass === "traveler") this.type = null;

  if (characterClass === "mage") this.type = "wand";

  if (characterClass === "warrior") this.type = "sword";
}
