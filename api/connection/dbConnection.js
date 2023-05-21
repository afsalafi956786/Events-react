import mongoose from "mongoose";


async function connectDb(data){
    try{
        mongoose.connect(data);
        console.log('database conneted successfully');
    }catch(error){
        console.log(error.message);
    }
}

export default connectDb;