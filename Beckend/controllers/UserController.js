
const User =require('../models/User')
const Payment=require('../models/Payment')
const bcrypt = require('bcryptjs');
 const tokenService = require('../Service/TokenService');

exports.Register= async(req,res)=>{
    const {name,password,email}=req.body;
    const hasspasword=await bcrypt.hash(password,10);
    const user=await User.findOne({where:{name,email}});
    if(user){
        return res.status(500).json({ message: 'User already exist.' });
    }
    const newuser= await User.create({name,password:hasspasword,email});
    const token=tokenService.createToken(newuser.dataValues);
    if(token){
        return res.send({message:"Successfully Registration", token:token})
    }
    else{
       return res.send("No token Generate")
    }

}
exports.Login=async(req,res)=>{
    const{email,password}=req.body;
    let user= await User.findOne({where:{email}})
    if(user){
        res.send(user);
    }
    else{
        res.send('User not Found');
    }
}

exports.AddPayemnt= async(req,res)=>{
    const {Name,cardno,date,CVV}=req.body;
    const payment= await Payment.create({Name,cardno,date,CVV});
   return  res.status(200).send({message:"Successfully",payment});

}