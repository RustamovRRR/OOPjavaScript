// this
// points to the left of the dot

const john = {
  firstName: "john",
  lastName: "doe",
  fullName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: "bob",
  lastName: "doe",
  fullName: function () {
    console.log(this);
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();

console.log("------------------- Advanced this keyword ----------------------");

// in Reg functions (not arraw) this determined "how" a funvtion is invoked (left of .)

// default to global - window
// arrow functions - pump the breaks

// in global it is window object
// console.log(this);

function showThis() {
  console.log(this);
}

const alice = {
  name: "alice",
  showThis: showThis,
};

const maria = {
  name: "maria",
  showThis: showThis,
};

alice.showThis();
maria.showThis();
showThis();
