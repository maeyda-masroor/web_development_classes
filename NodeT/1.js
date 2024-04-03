const { readFileSync , writeFileSync, read} = require('fs');
console.log('start');
const first = readFileSync("./first.txt",'utf-8');
let second = readFileSync("./second.txt",'utf-8');
writeFileSync('./third.txt',`here ${first} ${second}`,{flag:`a`});
console.log(`done with task`);
const os = require('os');
const path = require('path');
console.log(path.sep);
const filepath = path.join('/content/','subfolder','test.txt');
console.log(filepath);
const base = path.basename(filepath);
console.log(base);
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);
const user = os.userInfo();
console.log(user);
console.log(`the sustem is ${os.uptime} seconds`);
const currentOs={
    name:os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)
//WE are suppose to cover the content so we write a book on it 
console.log('welcome to nODE JS turtorial ');

//if and else 
const amount = 9 ;
if(amount<10){
    console.log('small number');
}
else {
    console.log('large number');
}

//dirname and interval 
console.log(__dirname);
setInterval(() => {
    console.log('hello world');
}, 1000);

const num1 = 5
const num2 = 10
function addValue(){
    console.log(`the sum is ${num1+num2}`);
}
addValue();