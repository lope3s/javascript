const { Car, Animal } = require("./object");

console.assert(typeof Car === "function", `typeof Car: ${typeof Car}`);

const myCar = new Car("Honda", "Honda", "2023");

console.assert(myCar.make === "Honda", `myCar.make === ${myCar.make}`);

console.assert(
  Animal.displayType() === "Invertebrates",
  `Animal.displayType(): ${Animal.displayType()}`
);

// Creates a new object using an existing object as the prototype.
const myAnimal = Object.create(Animal);

console.assert(
  myAnimal.displayType() === "Invertebrates",
  `myAnimal.displayType(): ${myAnimal.displayType()}`
);
