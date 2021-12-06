// Property Lookup
// if child does not have ask parent
// Everything in js is an object

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
