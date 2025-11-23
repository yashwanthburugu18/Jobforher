const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
const path=require('path')
const bcrypt=require('bcryptjs')
require('dotenv').config();
const UserModel=require('../backend/model/User')
const app=express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..',"frontend")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('MongoDB connected successfully✅')})

app.post('/register', async (req,res)=>{
  const {name,email,password}=req.body;
  try {

    const existingUser= await UserModel.findOne({ email });
    if(existingUser) return res.status(202).send({message:"user already existited! please login"});
    
    const hashedpassword = await bcrypt.hash(password,10);
    const newUser = new UserModel({
      name,
      email,
      password:hashedpassword
    })

    await newUser.save();
    
    res.status(202).send({message:"Signup Successfully"})
    
  } catch (error) {
    res.send('error',error)
    console.log('error',error)
  }
})

app.post('/login',async(req,res)=>
{
  const{email,password}=req.body;
  try {
     const existingUser= await UserModel.findOne({ email });
     if(!existingUser) return res.status(400).send({message:"user not found! please Signin"});
      const hashedpassed= await bcrypt.compare(password,existingUser.password);
     if(!hashedpassed) return res.status(400).send({message:'Invalid Creditentals'})
    return res.status(200).send({message:'login sucess'})
  } catch (error) {
    res.status(400).send(error)
    
  }
})
app.get('/getusers', async (req,res)=>{
  try {
    const users= await UserModel.find();
    return res.status(200).send({users})

  } catch (error) {
    console.log('error while geting users',error);
    return res.status(400).send({error})
  }
})
app.get('/',(req,res)=>{
  res.sendFile(__dirname,'..','frontend','index.html')
 })

app.listen(5000,(req,rea)=>{
  console.log('server running on port 5000')
})

 