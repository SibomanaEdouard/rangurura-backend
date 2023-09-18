const Users=require('../models/users')
const bcrypt=require('bcrypt')

//this is to sign the new user to the system
const signUp=async(req,res)=>{
    const{amazina,intara,akarere,umurenge,akagari,umudugudu,telephone,ijambobanga,indangamuntu,kwemezaIjambobanga}=req.body
    
    try{
   
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
 
}catch(error){
    if(error.name=="SequelizeUniqueConstraintError"){
if(error.fields.indangamuntu){
    res.status(400).json({error:"Indangamuntu yawe isanzwe muri rangurura yihindure  wongoere ugerageze cyangwa winjire."})
}else if (error.fields.telephone) {
    res.status(400).json({error:"Telephone yawe isanzwe muri rangurura yihindure wongore ugerageze cyangwa winjire."})
} else {
    res.status(500).json({error:"Error related to the database"});
    
}
    }else{
console.log(error)
res.status(500).json({error:"Hari ibitagenda neza kuri Rangurura! Ongera ugerageze mukanya"})
    }
}
    }

  
  module.exports = signUp;
  




