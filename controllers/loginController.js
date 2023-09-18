// const Users=require('../models/users')
// const bcrypt=require('bcrypt')

// // this is the logic of login the user in the system
// const InjizaUmuturage=async (req,res)=>{
//     const{indangamuntu,ijambobanga}=req.body
//     console.log(indangamuntu,ijambobanga);

//     try{
        
//     const findUser=await Users.findOne({indangamuntu})
// if(!findUser){
//     res.status(404).json({error:"Indangamuntu  cyangwa ijambobanga wanditse sibyo! Bikosore wongere ugerageze"})
// }else{
//     //let check for password
//     const storedPassword=await findUser.ijambobanga;
//     const comparePassword=await bcrypt.compare(ijambobanga,storedPassword)
//     if(comparePassword){
//         res.status(200).json({message:" Felestation winjiye muri Rangurura vuga ikibazo cyawe! "})
//     }else{
//         res.status(404).json({error:"Indangamuntu  cyangwa ijambobanga wanditse sibyo! Bikosore wongere ugerageze"})  
//     }
// }
//     }catch(error){
//         console.log(error)
//         res.status(500).json({error:"Hari ibitagenda neza kuri rangurura ungera ugerageze mukanya"})
//     }
// }
// module.exports=InjizaUmuturage

const db = require('../connections'); // Make sure this path is correct
const bcrypt = require('bcrypt');

const authenticateUser = async (indangamuntu, ijambobanga) => {
    try {
        // Query the database to find the user by indangamuntu
        const [rows] = await db.promise().query('SELECT * FROM Users WHERE indangamuntu = ?', [indangamuntu]);

        // Check if a user with the provided indangamuntu exists
        if (rows.length === 0) {
            return null; // User not found
        }

        // Compare the provided password with the stored hashed password
        const user = rows[0];
        const passwordMatch = await bcrypt.compare(ijambobanga, user.ijambobanga);

        if (passwordMatch) {
            return user; // User authenticated successfully
        } else {
            return null; // Incorrect password
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

const InjizaUmuturage = async (req, res) => {
    const { indangamuntu, ijambobanga } = req.body;

    try {
        const user = await authenticateUser(indangamuntu, ijambobanga);

        if (user) {
            // User authenticated
            // Set user session or JWT token for further authentication
            res.status(200).json({ message: 'Felestation winjiye muri Rangurura vuga ikibazo cyawe!' });
        } else {
            // Authentication failed
            res.status(401).json({ error: 'Indangamuntu  cyangwa ijambobanga wanditse sibyo! Bikosore wongere ugerageze' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Hari ibitagenda neza kuri rangurura ungera ugerageze mukanya' });
    }
};

module.exports = InjizaUmuturage;
 
