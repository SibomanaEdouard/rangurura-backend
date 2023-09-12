const Ibibazo=require('../models/ibibazo')

//this is the logic to insert the query in the table
const vugaIkibazo=async(req,res)=>{
   
    try{
    const{amazina,
        intara,
        akarere,
        umurenge,
        akagari,
        umudugudu,
        telephone,
        indangamuntu,
        ikibazo,
        proof,
        category,
        urwego}=req.body

        const postQuerry=await new Ibibazo({ amazina,intara,akarere,umurenge,akagari,umudugudu,telephone,indangamuntu,ikibazo,proof,category,urwego})

 const saveQuerry= await postQuerry.save()

if(saveQuerry){
  res.status(200).json({message:"Urakoze kuvuga ikibazo cyawe kigiye gukurikiranwa ninzego zibishyinzwe."})
}else{
    res.status(400).json({error:"Reba connection wongere ugerageze"})
}
        
}catch(error){
console.log(error)
res.status(500).json({error:"Hari ibitagenda neza kuri Rangurura! Ongera ugerageze mukanya"})
    }
      
}


module.exports=vugaIkibazo

