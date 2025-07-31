const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.auth = async (req,res , next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer', '')
        const data = jwt.verify(token, 'secret')
        const user = await User.findOne({_id: data._id})
        req.user = user;
        next()
    }catch(err){
        res.status(400).send({message: err.message})
    }
}

exports.createUser = async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json({user,token})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.loginUser = async (req,res) =>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user || ! await bcrypt.compare(req.body.password, user.password)){
            res.status(400).send('Invalid login credentials')
        }else{
            const toek = await user.generateAuthToken()
            res.json({user,token})
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.updateUser = async (req,res) => {
    try{
        const updates = Object.keys(req.body)
        const user = await User.findOne({_id : req.params.id})
        updates.forEach(update => user [update]= req.body[update])
        await user.save()
        res.json.save()
        res.json(user)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.deleteUser = async (req, res) => {
  try{
    await req.user.deleteOne()
    res.json({ message: 'User deleted' })
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
