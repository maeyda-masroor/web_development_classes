console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log('hello world');
},1000)
const john = 'john';
const peter = 'peter';
const sayHi=(name)=>{
    console.log(`hello there ${name}`)
}
module.exports = {john , peter}