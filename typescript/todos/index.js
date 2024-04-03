import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: 'input',
            message: 'please input  your task'
        }, {
            name: 'secondQeustion',
            type: 'confirm',
            message: 'please say yes or no',
            default: "true"
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQeustion;
}
