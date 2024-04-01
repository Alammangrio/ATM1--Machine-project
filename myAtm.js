import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1234;
console.log("wellcome alam atm");
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "please enter your pin here",
        type: "number",
    },
]);
if (pinAnswer.Pin === myPin) {
    console.log(chalk.bold.bgGreenBright("your pin is correct"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select one",
            type: "list",
            choices: ["withdraw", "checkBalance", "fastCash"],
            default: "withdraw",
        },
    ]);
    if (operationAns.operation === "withdraw") {
        console.log(chalk.bold.bgGreenBright("your amount withdraw "));
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance = myBalance - amountAns.amount;
            console.log("your balance is : " + myBalance);
        }
        else {
            console.log("sorry you have enough balance ");
        }
    }
    else if (operationAns.operation === "checkBalance") {
        console.log("your amount is: " + myBalance);
    }
    if (operationAns.operation === "fastCash") {
        let selectAns = await inquirer.prompt([
            {
                name: "select",
                message: "select one option",
                type: "list",
                choices: ["1000", "4000", "5000"],
            },
        ]);
        myBalance -= selectAns.select;
        console.log("your balance is remaining " + myBalance);
        console.log(chalk.bold.italic.bgCyanBright("THANK YOU for USING ALAM ATM SERVICE"));
    }
}
else {
    console.log("icorrect your pin!!!!");
}
