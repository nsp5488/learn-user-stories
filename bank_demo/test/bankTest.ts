import Bank from "../src/bank";

const bank = new Bank();

const account = bank.createAccount("Test Name", 22, "12341234");
if (account.accountNumber == "12341234") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

try {
    bank.createAccount("Test Name", 22, "12341234");
    console.log("Scenario 2 failed");
} catch(_) {
    console.log("Scenario 2 passed");

}