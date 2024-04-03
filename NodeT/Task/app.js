const express = require('express');
const app = express();
const routes = require('./routes/task');
//middleware 
app.use(express.json()); //parse request body as json

app.get('/hello',(req,res)=>{
    console.log('hellow rld');    
})

app.use('/api/v1/tasks',routes)

const Port = 3000;
/*
app.get('/api/v1/task');
app.post('api/v1/tasks');
app.get('/api/v1/task/id:number');
app.patch('/api/v1/task/id/:number');
app.delete('/api/v1/task/:number');
*/
app.listen(Port , ()=>{
    console.log('hello')
});

