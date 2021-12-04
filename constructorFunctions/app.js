// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - created new object, points to it, omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My name is ${this.firstName} ${this.lastName}. I love react.js`
    );
  };
  console.log(this);
}

const anna = new Person("anna", "ivanovna");
anna.fullName();

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(this);
//       console.log(`My name is ${this.firstName} ${this.lastName}`);
//     },
//   };
// }

// const john = createPerson("john", "overmars");
// john.fullName();
// const zidan = createPerson("zineddin", "zidan");
// zidan.fullName();
// const beckham = createPerson("david", "beckham");
// beckham.fullName();
