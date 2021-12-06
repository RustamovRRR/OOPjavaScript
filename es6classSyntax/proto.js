// ES6 Class
// Syntactic Sugar
// Prototypal sugar

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  // this.bankName = "Bank Of Baku";
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
