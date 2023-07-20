// Constructor function, can called with the "new" keyword to instantiate a new Object.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const Animal = {
  type: "Invertebrates",
  displayType() {
    return this.type;
  },
};

module.exports = {
  Car,
  Animal,
};
