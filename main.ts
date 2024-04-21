#! /usr/bin/env node 
import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin number!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operations",
      message: "please select option",
      type: "list",
      choices: ["widthdraw", "Fast Cash", "check balance"],
    },
  ]);
  if (operationAns.operations === "widthdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The remaining balance is ${balance}`);
    } else {
      console.log("You have insufficient balance");
    }
  }
  // if user select fast cash
  else if (operationAns.operations === "Fast Cash") {
    let FastcashAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Choice",
        type: "list",
        choices: ["1000", "2000", "3000", "5000", "10000", "20000"],
      },
    ]);
    if (FastcashAns.amount <= myBalance) {
      let balance2 = myBalance - FastcashAns.amount;
      console.log(`The Remaining Balance is ${balance2}`);
    } else {
      console.log(`You have insufficient amount`);
    }
  } else if (operationAns.operations === "check balance") {
    console.log(myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
