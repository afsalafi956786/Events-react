import eventModel from "../schema/eventSchema.js";


export async function candidatePost(req,res){
    try{
        const obj=req.body;
     

        await eventModel.create({
            stname:obj.stname,
            department:obj.department,
            fields:obj.fields,
        })
        res.json({status:'success',message:'completed successfully..',obj})

    }catch(error){
        console.log(error.message);
    }

}

export async function getNoticeboard(req,res){
    try{
        const getEvents=await eventModel.find();
        res.json({getEvents})



    }catch(error){
        console.log(error.message);
    }

}