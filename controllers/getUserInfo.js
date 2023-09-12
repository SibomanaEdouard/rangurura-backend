const Users=require('../models/users')

//this is the logic to get all information about the loged user
const getInfo=async(req,res)=>{
    //this userId will be taken as the user is logging in
    const{userId}=req.body
    try{
        const findUsers=await Users.findById(userId);
        if(findUsers){
            res.status(200).json(findUsers)
        }else{
            res.status(404).json({message:"Ntamuturage wabonetse ufite uyumwirondoro!"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Hari ikosa ryabaye muri rangurura! Mwongere mugerageze mukanya!"})
    }
}

module.exports=getInfo