// call - runs instantly, arguments - list of items

const anna = {
  name: "anna",
  age: 21,
  greet: function () {
    console.log(this);
    console.log(
      `Hello my name is ${this.name.toUpperCase()}. I am ${this.age} years old`
    );
  },
};

const benjamin = {
  name: "benjamin",
  age: 21,
};

function greet() {
  console.log(this);
  console.log(
    `Hello my name is ${this.name.toUpperCase()}. I am ${this.age} years old`
  );
}

anna.greet();

greet.call(benjamin);
greet.call(anna);
anna.greet.call(benjamin);

greet.call({ name: "vlas", age: 33 });
