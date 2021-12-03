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
