import express from 'express';
import dotenv from 'dotenv';
import connectDb from './connection/dbConnection.js';
import cors from 'cors'
import eventRouter from './routes/eventRouter.js';
dotenv.config();
const app=express();


 let database_connection=process.env.DATA_BASE_CONNECTION;
connectDb(database_connection);
app.use(express.json());
app.use(cors())


app.use('/',eventRouter)


app.listen(8800,()=>{
    console.log('server is connected to the port 8800');
})
