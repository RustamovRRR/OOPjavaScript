// nested objects
// set variable as property value
// dot notation vs bracket notation

// we can re-use nested objects property names
// we can add how many nested objects we want. there is no limit

let age = 45;
let random = "random-value";

const person = {
  name: "john",
  age: age,
  married: true,
  siblings: ["anna", "piter", "sansa"],
  greet: function (name) {
    console.log(`Hi ${name}`);
  },
  seyHello(name) {
    console.log(`Hi ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "Microsoft",
      address: "Nerimanov kuc",
    },
  },
  "random-value": "nese",
};

console.log(person.job.company.name);
console.log(person.job.title);
console.log(person);
console.log(person["random-value"]);
console.log(person[random]);
