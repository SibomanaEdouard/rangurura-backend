const Ibibazo=require('../../models/ibibazo')

//this is the logic to count the number of task for 
const countAllProbs=async(req,res)=>{
    try{
    const numberOfProb= await Ibibazo.countDocuments();
    if(numberOfProb!=null){
        res.status(200).json(numberOfProb); 
    
    }else{
        res.status(404).json("There is no task");
    }
    
    }catch(error){
        console.log(error)
        res.status(500).json("something went wrong please Try again latter!");
    }
    
    }
module.exports=countAllProbs