const mongoose=require('mongoose')
const Users=require('../models/users')
const bcrypt=require('bcrypt')
//this is to sign the new user to the system
const signUp=async(req,res)=>{
    try{
    const{amazina,intara,akarere,umurenge,akagari,umudugudu,telephone,ijambobanga,indangamuntu,kwemezaIjambobanga}=req.body
    // let me check if the user is already in the system
    const findUser=await Users.findOne({telephone});
    const userId=await Users.findOne({indangamuntu})
    if(findUser || userId){
        res.status(400).json({message:'Indangamuntu cyangwa Telephone wakoreshyeje biri muri rangurura! Injira cyangwa uhindure indangamuntu na telephone'})
    }
    else{
        //let me hash password before save it in the db
        if(ijambobanga==kwemezaIjambobanga){
            const hashedPassword= await bcrypt.hash(ijambobanga,10)
              //let sign the user in the system
        const signUser=await new Users({
            amazina,
            intara,
            akarere,
            umurenge,
            akagari,
            umudugudu,
            telephone,
            ijambobanga:hashedPassword,
            indangamuntu,
        })
 const saveUser= await signUser.save()
if(saveUser){
  res.status(200).json({message:"Urakoze kwiyandikishya muri Rangurura! Ubu ushobora kwinjiramo ugatanga ikibazo cyawe!"})
}else{
    res.status(400).json({error:"Reba connection wongere ugerageze"})
}
        }else{
            res.status(400).json({message:"Ijambobanga wemeje rigomba kuba risa niryo wanditse mbere!"})
        }
    }
}catch(error){
console.log(error)
res.status(500).json({error:"Hari ibitagenda neza kuri Rangurura! Ongera ugerageze mukanya"})
    }
      
    }
// }

module.exports=signUp

