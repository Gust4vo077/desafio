const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const express = require('express')
const router = express.Router()
const UserModel = require('../domain/user/user')

const authorize = require('../infra/middlewares/authorize')

router.use(authorize);

router.get('/listar', async (req, res) => {
    const data= await UserModel.find();
    res.send({ data});

  });

router.get('/listar/:id', async (req, res) => {
    const {id}=req.params
    const data= await UserModel.findOne({_id:id});
    if(!data){
        return res.status(400).json({message: "Usuario não encontrado"});
    }
    res.send({ data});

});

module.exports=router; 
