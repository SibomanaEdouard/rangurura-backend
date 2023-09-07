const mongoose=require('mongoose')
const Users=require('../models/users')
const bcrypt=require('bcrypt')
//this is to sign the new user to the system
const signUp=async(req,res)=>{
    const{amazina,intara,akarere,umurenge,akagari,umudugudu,telephone,ijambobanga,indangamuntu,kwemezaIjambobanga}=req.body
    // let me check if the user is already in the system
    const findUser=await Users.find(telephone);
    const userId=await Users.find(indangamuntu)
    if(findUser || userId){
        res.status(400).json({message:'Indangamuntu cyangwa Telephone wakoreshyeje biri muri rangurura! Injira cyangwa uhindure indangamuntu cyangwa telephone'})
    }
    else{
        //let me hash password before save it in the db
        if(ijambobanga==kwemezaIjambobanga){
            const hashedPassword=bcrypt.hash(ijambobanga,10)
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
  signUser.save()
  res.status(200).json({message:"Urakoze kwiyandikishya muri Rangurura! Ubu ushobora kwinjiramo ugatanga ikibazo cyawe!"})
        }else{
            res.status(400).json({message:"Ijambobanga wemeje rigomba kuba risa niryo wanditse mbere!"})
        }

      
    }
}

module.exports=signUp

