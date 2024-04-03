import inquirer from "inquirer";
const randomNumber = Math.floor((Math.random())*10+1);
const answers = await inquirer.prompt([{
    name:'userguessnumber',
    type:'number',
    message:'please guess a number'
    
}])
if(answers.userguessnumber===randomNumber){
    console.log('Congratulations!');
}
else{
    console.log('wrong number');
}