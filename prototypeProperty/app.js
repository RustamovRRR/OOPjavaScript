// Prototypal Inheritance Model
// JavaScript use prototypal inheritance model.
// That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class.
// So any properties and methods or prototype can be accessed by every instance
// prototype property retuns an object.

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bankName = "Kapital Bank";

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(this.balance);
};

const john = new Account("john", 200);
const vlas = new Account("john", 300);

console.log(john.bankName);
console.log(vlas.bankName);

john.deposit(100);
vlas.deposit(300);
