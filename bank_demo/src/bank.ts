// Interface for bank accounts within the bank.
interface BankAccount {
    name: string,
    age: number,
    accountNumber: string,
    balance: number
};

/**
 * Bank manages a set of accounts.
 */
export default class Bank {
    // Hashmap from account number to BankAccount to store new accounts in.
    private accounts : Map<string, BankAccount> = new Map();
    
    private getAccountOrError(accountNumber:string): BankAccount {
        let account = this.accounts.get(accountNumber);
        if (!account) {
            throw new Error("Account does not exist!");
        }
        return account;
    }
    /**
     * Creates a new account if the information entered is valid (no duplicate account numbers).
     * @param {string} name The name of the user creating the account
     * @param {number} age The age of the user creating the account
     * @param {string} accountNumber The account number for the account
     * @returns {BankAccount} a BankAccount object if succesful.
     */
    public createAccount(name:string, age:number, accountNumber:string): BankAccount {
        if(this.accounts.has(accountNumber)) {
            throw new Error("Account already exists!");
        } else {

            const account : BankAccount = {
                name,
                age,
                accountNumber,
                balance: 0
            };
            this.accounts.set(accountNumber, account);
            return account
        }
    }
    /**
     * Deposits money into an account if possible.
     * @param {string} accountNumber The account number to deposit into.
     * @param {number} amount The amount to deposit (must be positive).
     * @returns {number} The new balance of the account.
     */
    public deposit(accountNumber: string, amount: number): number {
        if(amount <= 0) {
            throw new Error("Invalid deposit amount!");
        }
        let account = this.getAccountOrError(accountNumber)
        account.balance += amount;
        return account.balance;
    }

    /**
     * Withdraws money from an account if possible.
     * @param accountNumber The account to withdraw from.
     * @param amount The amount to withdraw.
     * @returns {number} The new balance of the account.
     */
    public withdraw(accountNumber: string, amount:number): number {
        if(amount <= 0) {
            throw new Error("Invalid withdrawl amount");
        }
        let account = this.getAccountOrError(accountNumber)
        account.balance -= amount;
        return account.balance;
    }

    /**
     * Returns the balance of a given account.
     * @param accountNumber The account to check the balance of.
     * @returns The balance of the provided account, if it exists.
     */
    public checkBalance(accountNumber: string): number {
        return this.getAccountOrError(accountNumber).balance;
     }
}