import inquirer  from 'inquirer';
import chalk from 'chalk';
let answer = inquirer.prompt({
    message:"Enter the amount to loan",
    type:'number',
    name: "amount"
},{
    message:"enter rate",
    type:'number',
      
})
async function Welcome(){
    console.log(`${chalk.bgBlue('welcome to age calculator CLI')}`);
}
