const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const express = require('express')
const router = express.Router()
const UserModel = require('../domain/user/user')


router.post('/login', async (req, res, next) => {
    const {email} = req.body
   
    const userExiste = await UserModel.findOne({email:email})
   
    if(!userExiste){
        return res.status(500).json({message: "Esse email não foi achado"});
    }
  
    if (!await bcrypt.compare(req.body.senha,userExiste.senha)){

       return res.status(500).send({ message: " Credencial invalida"})
   }

    const token = jwt.sign({ _id: userExiste._id }, '47NRXY47YRN947YM8URE1431ER90UEXRM8UE8N43');
    res.send({ token, id: userExiste._id });
  });






module.exports=router;