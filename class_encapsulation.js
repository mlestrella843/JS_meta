class BankAccount {
    // Private property to hold the balance
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance > 0 ? initialBalance : 0; // Ensure a non-negative initial balance
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive!');
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log('Insufficient funds!');
        } else {
            console.log('Withdrawal amount must be positive!');
        }
    }

    // Public method to check the balance
    checkBalance() {
        console.log(`Current balance: $${this.#balance}`);
    }
}

// Create an instance of BankAccount
const myAccount = new BankAccount(100);

// Use public methods to interact with the account
myAccount.checkBalance();       // Output: Current balance: $100
myAccount.deposit(50);          // Output: Deposited: $50. New balance: $150
myAccount.withdraw(30);  