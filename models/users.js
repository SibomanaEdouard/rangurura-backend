// const mongoose=require('mongoose');
// const userSchema=new mongoose.Schema({
//     amazina:{
//         type:String,
//         required:true,
//         minLength:3,
        
//     },
//     intara:{
//         type:String,
//         required:true,
//         minLength:3,   
//     },
//     akarere:{
//         type:String,
//         required:true,     
//     },
//     umurenge:{
//         type:String,
//         required:true,     
//     },
//     akagari:{
//         type:String,
//         required:true,     
//     },
//     umudugudu:{
//         type:String,
//         required:true,     
//     },
//     telephone:{
//         type:String,
//         required:true,
//         unique:true     
//     },
//     indangamuntu:{
//         type:String,
//         required:true,
//         unique:true     
//     },
//     ijambobanga:{
//         type:String,
//         required:true,     
//     },
//     imageUrl:{
//         type:String,
//         required:false,     
//     },
  
// })
// module.exports=mongoose.model('users',userSchema);

const mysql = require("mysql2");

// Define a User model
const User = {
  create: async (userData) => {
    const sql = "INSERT INTO users (amazina, intara, akarere, umurenge, akagari, umudugudu, telephone, indangamuntu, ijambobanga, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      userData.amazina,
      userData.intara,
      userData.akarere,
      userData.umurenge,
      userData.akagari,
      userData.umudugudu,
      userData.telephone,
      userData.indangamuntu,
      userData.ijambobanga,
      userData.imageUrl || null, // Assuming imageUrl is optional
    ];

    const [rows, fields] = await pool.execute(sql, values);
    return rows.insertId;
  },

  // Add other CRUD operations as needed
};

module.exports = User;
