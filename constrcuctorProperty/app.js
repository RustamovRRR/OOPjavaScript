// all Objects in JavaScript have access to constructor property
// that returns a constructor function that created it.
// build in constructor functions
// arrays and functions are objects in JavaScript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My name is ${this.firstName} ${this.lastName}. I love react.js`
    );
  };
}

const anna = new Person("anna", "ivanovna");
console.log(anna.constructor);

const micky = {};

console.log(micky.constructor);

const array = [];
console.log(array.constructor);

const newFunc = function () {};

console.log(newFunc.constructor);

const takeshi = new anna.constructor("takeshi", "kitano");
takeshi.fullName();
