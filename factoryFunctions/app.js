// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: "john",
//   lastName: "doe",
//   fullName: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: "bob",
//   lastName: "doe",
//   fullName: function () {
//     console.log(this);
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(this);
      console.log(`My name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const john = createPerson("john", "overmars");
john.fullName();
const zidan = createPerson("zineddin", "zidan");
zidan.fullName();
const beckham = createPerson("david", "beckham");
beckham.fullName();
