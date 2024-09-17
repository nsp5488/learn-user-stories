import Bank from "../src/bank";

const bank = new Bank();

console.log("Testing account creation")
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

console.log("Account creation tests complete.");

console.log("Testing deposit");

bank.deposit("12341234", 50);
if (account.balance === 50) {
    console.log("Scenario 3 passed")
} else {
    console.log("Scenario 3 failed");
}
try {
    bank.deposit("12341234", -1)
    console.log("Scenario 4 failed");
} catch(_) {
    console.log("Scenario 4 passed")
}

try {
    bank.deposit("abc", 50)
    console.log("Scenario 4 failed");
} catch(_) {
    console.log("Scenario 4 passed")
}

console.log("deposit tests complete.");


console.log("Testing withdraw");

bank.withdraw("12341234", 25);
if (account.balance === 25) {
    console.log("Scenario 5 passed")
} else {
    console.log("Scenario 5 failed");
}
try {
    bank.withdraw("12341234", -1)
    console.log("Scenario 6 failed");
} catch(_) {
    console.log("Scenario 6 passed")
}

try {
    bank.withdraw("abc", 10)
    console.log("Scenario 7 failed");
} catch(_) {
    console.log("Scenario 7 passed")
}

console.log("withdraw tests complete.");
