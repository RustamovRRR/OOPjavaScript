// ES6 Class
// Syntactic Sugar
// Prototypal sugar

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  // properties will not be prototype
  bank = "Bank Standard";

  // method will be prototype
  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
  }
}

const anna = new Account("Anna", 100);
anna.deposit(500);
console.log(anna);
console.log(anna.bank);

const katerina = new Account("katerina", 500);
katerina.deposit(1000);
console.log(katerina);
console.log(katerina.bank);
