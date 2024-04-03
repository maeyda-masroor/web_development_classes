require('dotenv').config();
require('express-async-error');
const express = require('express');
const app = express();
const connectDB = require('../starter//db/connect');
const productRouter = require('../starter/routes/products');

const notFoundMiddleWare = require('../starter/middleware/error-handler');
const errorMiddelware = require('../starter/middleware/not-found');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>Store API</h1><a href='/api/v1/products'>Products</a>");
})
app.use('/api/v1/products',productRouter);
app.use(notFoundMiddleWare);
app.use(errorMiddelware);
const port = process.env.PORT || 3000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port , () => console.log('eerr'))
    }
    catch(error){
        console.log('error');
    }
}
start();