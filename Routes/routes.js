const express=require('express')
const app=express()
const signUp=require('../controllers/signupController')//to sign the user
const { json } = require('body-parser')
const InjizaUmuturage=require('../controllers/loginController') //kwinjiza umuntu muri rangurura
// const getInfo=require('../controllers/getUserInfo') //reba umwirondoro
// const updatProfile=require('../controllers/updateProfileController') //hindura umwirondoro
// const vugaIkibazo=require('../controllers/ikibazoController') //this is to insert  the problem in the db
// const multer=require('multer')
// const getUserProblem=require("../controllers/getProblemController") //this is to get the problems
// const countAllProbs=require('../controllers/CountProblems/countAllInCountry') //this is to get total problems in the country
// const countProblemsinlife=require('../controllers/CountProblems/problemcat').countInUbuzinaCat //this is the number of problems in life caterory
// const countProblemsineducation=require('../controllers/CountProblems/problemcat').countInUbureziCat //this is the number of problems in education
// const countProbsInImibereho=require('../controllers/CountProblems/problemcat').countInImiberehoCat //this is the number of problems in imibereho
// const countProbsInIrangamimerere=require('../controllers/CountProblems/problemcat').countInIrangamimerereCat //this is the number of problems in irangamimerere
// const ibikorwaRemezo=require('../controllers/CountProblems/problemcat').ibikorwaRemezo //this is the number of problems in ibikorwa remezo

//this is signup 
app.post('/iyandikishye',signUp)
app.post('/',InjizaUmuturage) //this is login route
// app.post('/umwirondoro',getInfo)
// app.put('/hinduraUmwirondoro',updatProfile)
// app.post('/vugaIkibazo',vugaIkibazo)

// //this is to update the image of the user
// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });
  
//   const upload = multer({ storage });
//   app.put('/updateImage', upload.single('image'), async (req, res) => {
//     const { userId } = req.body;
//     try {
//         const file = req.file;
//         const imageUrl = file.filename;
        
//         // Update the user's image URL
//         const updateImage = await userSchema.findByIdAndUpdate(userId,{imageUrl})
//         if(updateImage){
//           res.status(200).json({imageUrl });
//         }
  
//       else {
//         res.status(404).json({ error: 'The failed to update image'});
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Something went Wrong! Please try again later' });
//     }
//   });
//   app.use('/uploads', express.static('uploads'));
// app.post('/ibibazo',getUserProblem)

// //these are the routes to get the number of problems
// app.get('/totalprobs',countAllProbs)
// app.get('/totalprobsinlife',countProblemsinlife)
// app.get('/totalprobsineducation',countProblemsineducation)
// app.get('/totalprobsimibereho',countProbsInImibereho)
// app.get('/totalprobsirangamimerere',countProbsInIrangamimerere)
// app.get('/totalprobsibikorwaremezo',ibikorwaRemezo)

module.exports=app





