const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const express = require('express')
const router = express.Router()
const UserModel = require('../domain/user/user')
const authorize = require('../infra/middlewares/authorize')

router.use(authorize);

router.delete('/delete/:id', async (req, res, next) => {
    const {id} = req.params;

    const userDeletado= await UserModel.findByIdAndDelete(id);
    
    if(!userDeletado){
        return res.status(400).json({message: "O usuario não foi encontrado"});
    }
    

    res.send({ message: 'Usuario foi deletedo', user: userDeletado });
  });






module.exports=router;