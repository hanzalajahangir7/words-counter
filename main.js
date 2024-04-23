import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter your paragraph to count the words"
    }]);
const words = answer.sentence.trim().split(" ");
console.log(`your paragraph words are ${words.length}`);
