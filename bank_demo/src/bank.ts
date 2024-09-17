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
}