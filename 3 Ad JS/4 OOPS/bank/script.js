class BankAccount {
    #balance;
    #transactions;

    constructor(name, accountNumber, initialBalance = 0) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit must be positive");
            return;
        }

        this.#balance += amount;
        this.#transactions.push(`Deposited ₹${amount}`);
        console.log(`₹${amount} deposited successfully`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }

        this.#balance -= amount;
        this.#transactions.push(`Withdrew ₹${amount}`);
        console.log(`₹${amount} withdrawn successfully`);
    }

    getBalance() {
        return `Current Balance: ₹${this.#balance}`;
    }

    getStatement() {
        console.log(`\nTransaction History of ${this.name}`);
        this.#transactions.forEach(t => console.log("•", t));
    }
}

let acc1 = new BankAccount("Paras", 101, 1000);

acc1.deposit(500);
acc1.withdraw(300);
acc1.deposit(200);

console.log(acc1.getBalance());
acc1.getStatement();

// console.log(acc1.#balance); // private field cannot be accessed outside the class