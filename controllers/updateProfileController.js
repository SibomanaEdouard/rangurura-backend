// const multer=require('multer')
// const Users=require('../models/users')
// const { fileURLToPath } = require('url')

// //this is the logic to update the profile of the user 

// const UpdateProfile=async(req,res)=>{

// //userId is the id of the user which must be taken when the user is logging in
//     const{userId,amazina,indangamuntu,intara,akarere,umurenge,akagari,umudugudu}=req.body
//     const imageUrl=req.fileURLToPath
// try{
//     const updateUserprofile=await Users.findByIdAndUpdate(userId,{$set:{
//         amazina:amazina,
//         indangamuntu:indangamuntu,
//         intara:intara,
//         akarere:akarere,
//         umurenge:umurenge,
//         akagari:akagari,
//         umudugudu:umudugudu,
//         imageUrl:imageUrl
//     }})
// if(updateUserprofile){
// res.status(200).json({message:"Umwirondoro wawe wahinduwe!"})
// }else{
//     res.status(400).json({message:"Reba connection wongere ugerageze."})
// }
// }catch(error){
//     console.log(error)
//     res.status(500).json({error:"Mwihangane hari ikosa ryabaye! Mugerageze mukanya."})
// }
// }

// module.exports=UpdateProfile