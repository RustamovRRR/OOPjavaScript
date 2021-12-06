// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items

const anna = {
  name: "anna",
  age: 21,
};

const benjamin = {
  name: "benjamin",
  age: 21,
};

function greet(city, county) {
  console.log(this);
  console.log(
    `Hello my name is ${this.name.toUpperCase()}. I am ${
      this.age
    } years old. I am living in ${city}, ${county}`
  );
}

console.log("------------- call ---------");
greet.call(benjamin, "Baku", "Azerbaijan");
greet.call(anna, "Kiev", "Ukraina");
greet.call({ name: "vlas", age: 33 }, "Minsk", "Belarus");
console.log("------------- apply ---------");
greet.apply(benjamin, ["Jerusalim", "Israel"]);
greet.apply(anna, ["Jerusalim", "Israel"]);
greet.apply({ name: "george", age: 44 }, ["Jerusalim", "Israel"]);
