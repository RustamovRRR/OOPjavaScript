// Objects Basics

// Objects are collections of key(property) value pairs
// Property values can be strings, numbers, booleans, arrays and functions
// however if the property value is a function it's called method

// object literal syntax, {}
// dot notation

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "piter", "sansa"],
  greet: function (name) {
    console.log(`Hi ${name}`);
  },
  seyHello(name) {
    console.log(`Hi ${name}`);
  },
};

console.log(person);

// dot notation
const name = person.name;
console.log(name);

person.greet("Anna");
person.seyHello("Vanya");

// adding new property
person.job = "web developer";
console.log(person);

// delete
delete person.siblings;
console.log(person);

// you can assign the deleted propery it will return boolean value
const deleted = delete person.age;
console.log(deleted);
