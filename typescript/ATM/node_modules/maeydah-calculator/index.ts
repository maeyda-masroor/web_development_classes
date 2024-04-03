import inquirer from "inquirer";
import { escape } from "querystring";
let loop = true
while(loop){
const userInput = await inquirer.prompt([
    {
    type:"number",
    name:"num1",
    message:"Enter your first number",
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your second number",
        },
        {
            type:'list',
            name:"operator",
            choices:["Addition","sub","multplication","division"]
        }
]);
const num1 = userInput.num1;
const num2= userInput.num2;
const operator = userInput.operator;
console.log(num1,num2,operator);
if(num1&&num2){
  if(operator === "Addition"){
    console.log(`\nthe answeer of ${num1}+${num2} = ${num1+num2}`)
  }   
  else if (operator==="sub"){
    console.log(`the answer of ${num1} - ${num2} is ${num1-num2} `)
}
else if (operator=="multplication"){
    console.log(`The product of ${num1} and ${num2} is ${num1*num2}`)
}
else if (operator ==='division'){
    console.log(`The division of ${num1} by ${num2} is  ${num1/num2}`)}
}
else{
    console.log("please enter a value number")
}
const calculateMore = await inquirer.prompt({
    type:"confirm",
    name:"more",
    message:"do you more calual",
    default:false
});
if(!calculateMore.more){
    loop=false;
    console.log("thank you ");
}
}