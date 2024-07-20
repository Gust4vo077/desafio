const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express')
const router = express.Router()
const UserModel = require('../domain/user/user')


router.post('/cadastrar', async (req, res, next) => {
    const {nome,email,senha} = req.body
  

    const user = new UserModel({"nome":nome,"email":email,"senha":senha});

    const userExiste= await UserModel.exists({email});
    if(userExiste){
        return res.status(400).json({message: "e-mail já existe"});
    }
    
    user.save();
  
    res.send({ user});
  });






module.exports=router;