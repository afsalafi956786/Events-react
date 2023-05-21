import mongoose from "mongoose";

let eventSchema=new mongoose.Schema({
    stname:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        requied:true,
    },
    fields:[{
        name:String,
        value:String,
        score:String,
    }]
})

const eventModel=mongoose.model('event',eventSchema);
export default eventModel;