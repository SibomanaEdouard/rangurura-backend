const Ibibazo=require('../../models/ibibazo')

//this is the logic to count the number of problems in category of life
const countInUbuzinaCat=async(req,res)=>{
    const category='ubuzima';
    try{
    const numberOfProb= await Ibibazo.countDocuments({category});
    if(numberOfProb!=null){
        res.status(200).json(numberOfProb); 
    
    }else{
        res.status(404).json("Ntabibazo biri mubuzima");
    }
    
    }catch(error){
        console.log(error)
        res.status(500).json("Hari ikosa ryabaye ! Mwongere mugerageze mukanya.");
    }
    
    }


    //this is the logic to count the number of problems in category of education
const countInUbureziCat=async(req,res)=>{
    const category='uburezi';
    try{
    const numberOfProb= await Ibibazo.countDocuments({category});
    if(numberOfProb!=null){
        res.status(200).json(numberOfProb); 
    
    }else{
        res.status(404).json("Ntakibazo kiri muburezi");
    }
    
    }catch(error){
        console.log(error)
        res.status(500).json("Hari ikosa ryabaye! Mwongere mugerageze mukanya.");
    }
    
    }


    //this is the logic to count the number of problems in category of wealthfare
const countInImiberehoCat=async(req,res)=>{
    const category='imibereho myiza'
    try{
    const numberOfProb= await Ibibazo.countDocuments({category});
    if(numberOfProb!=null){
        res.status(200).json(numberOfProb); 
    
    }else{
        res.status(404).json("Ntakibazo kiri mu mibereho myiza!");
    }
    
    }catch(error){
        console.log(error)
        res.status(500).json("Hari ikosa ryabaye! Mwongere mugerageze mukanya.");
    }
    
    }


    //this is the logic to count the number of problems in category of irangamimerere
    const countInIrangamimerereCat=async(req,res)=>{
        const category='irangamimerere'
        try{
        const numberOfProb= await Ibibazo.countDocuments({category});
        if(numberOfProb!=null){
            res.status(200).json(numberOfProb); 
        
        }else{
            res.status(404).json("Ntakibazo kiri  mu irangamimerere !");
        }
        
        }catch(error){
            console.log(error)
            res.status(500).json("Hari ikosa ryabaye! Mwongere mugerageze mukanya.");
        }
        
        }


            //this is the logic to count the number of problems in category of social activities and industries
const ibikorwaRemezo=async(req,res)=>{
    const category="ibikorwaremezo n'inganda"
    try{
    const numberOfProb= await Ibibazo.countDocuments({category});
    if(numberOfProb!=null){
        res.status(200).json(numberOfProb); 
    
    }else{
        res.status(404).json("Ntakibazo kiri mu bikorwaremezo!");
    }
    
    }catch(error){
        console.log(error)
        res.status(500).json("Hari ikosa ryabaye! Mwongere mugerageze mukanya.");
    }
    
    }

module.exports={countInUbuzinaCat,countInUbureziCat,countInImiberehoCat,countInIrangamimerereCat,ibikorwaRemezo}