const Users=require('../models/users')
const bcrypt=require('bcrypt')

// this is the logic of login the user in the system
const InjizaUmuturage=async (req,res)=>{
    const{indangamuntu,ijambobanga}=req.body

    try{
        
    const findUser=await Users.findOne({indangamuntu})
if(!findUser){
    res.status(404).json({error:"Indangamuntu  cyangwa ijambobanga wanditse sibyo! Bikosore wongere ugerageze"})
}else{
    //let check for password
    const storedPassword=await findUser.ijambobanga;
    const comparePassword=await bcrypt.compare(ijambobanga,storedPassword)
    if(comparePassword){
        res.status(200).json({message:" Felestation winjiye muri Rangurura vuga ikibazo cyawe! "})
    }else{
        res.status(404).json({error:"Indangamuntu  cyangwa ijambobanga wanditse sibyo! Bikosore wongere ugerageze"})  
    }
}
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Hari ibitagenda neza kuri rangurura ungera ugerageze mukanya"})
    }
}
module.exports=InjizaUmuturage