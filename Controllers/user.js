const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const cookieOptions ={
    httpOnly:true,
    secure:false, // Set to true in production
    samSite:'Lax'
}

exports.signUp = async(req,res)=>{
    try {
        const{channelName,userName,about,profilePic,password} = req.body;
        const isExist = await User.findOne({userName});
       
        
        if (isExist) {
            res.status(400).json({error:"Username Already Exist Please try with other username"})
        }else{
            let updatedPass = await bcrypt.hash(password,10);
            const user = new User ({channelName, userName, about,profilePic,password: updatedPass });
            await user.save();
            res.status(201).json({message:'user registered successfully',success:"yes",data:user});
        }   
         }catch (error) {
          res.status(500).json({error:'Server error'});
         }
}

exports.signIn = async (req,res) => {
        try {
         const {userName,password}= req.body;
         const user = await User.findOne({userName});

         if(user && await bcrypt.compare(password,user.password)){

            const token = jwt.sign({userId: user._id}, 'Its_My_Secret_Key');
            res.cookie('token',token,cookieOptions);
            
           res.json({message:'Logged in successfully',success:"true",token});

         }else{
            res.status(400).json({error:'Invalid credentials'});
         }
        } catch (error) {
          res.status(500).json({error:'Server error'});  
        }
}

exports.logout = async (req,res) => {
    res.clearCookie('token',cookieOptions).json({message:'Logged out successfully'});
}