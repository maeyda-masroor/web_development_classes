const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
const ErrorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/notFound');
//middleware 
app.use(express.static('./public'));
app.use(express.json());

//routes

app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(ErrorHandlerMiddleware);
const port = process.env.Port || 3000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log('cc'))
    }
    catch(error){
        console.log(error)
    }
}
start();