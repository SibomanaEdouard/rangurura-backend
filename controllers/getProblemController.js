const Ibibazo=require('../models/ibibazo')

//this is the logic to get the problems
const getUserProblem=async(req,res)=>{
    const {userId}=req.body //this id must be taken  when the  the user is loggin in or  writing the problem
   try{
const findProblems=await Ibibazo.findById(userId)
if(findProblems){
    res.status(200).json(findProblems)
}else{
    res.status(400).json({message:"Ntabibao bihari!"})
}   
   }catch(error){
    console.log(error)
    res.status(500).json({error:"Hari ikosa ryabaye! Ongera ugerageze mukanya."})
   } 
}

module.exports=getUserProblem