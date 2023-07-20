const { Car, Animal } = require("./object");

// Even though Car is a function
console.assert(typeof Car === "function", `typeof Car: ${typeof Car}`);

// We can use it as a constructor function like a class
const myCar = new Car("Honda", "Honda", "2023");

// As we can see here, the call to the constructor function with the new keyword yelds an object;
console.assert(myCar.make === "Honda", `myCar.make === ${myCar.make}`);

// Animal is a predefined object
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

// We can use Object.hasOwn to validate if the property belongs to the object itself,
// and not to its prototype chain:
console.assert(
  Object.hasOwn(myAnimal, "type") == false,
  `Object.hasOwn(myAnimal, 'type'): ${Object.hasOwn(myAnimal, "type")}`
);

// We can add properties to all objects created through a certain constructor using the prototype:

const yourCar = new Car("Civic", "Civic", 2022);

// Here we're adding the property color only to your car
yourCar.color = "blue";

// Here we're adding a default color to every object created by this constructor function;
// Note that yourCar.color stil "blue", even though this is called after.
Car.prototype.color = "red";

// If you remove the color you already added then the color to your car will be now "red"
delete yourCar.color;

console.assert(
  myCar.color === yourCar.color,
  `myCar.color (${myCar.color}) === yourCar.color (${yourCar.color})`
);
