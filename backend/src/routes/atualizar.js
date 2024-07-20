const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const express = require('express')
const router = express.Router()
const UserModel = require('../domain/user/user')
const authorize = require('../infra/middlewares/authorize')

router.use(authorize);

router.put('/atualizar/:id', async (req, res, next) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const {_id}=await UserModel.findById(id);
    const userUpdate = await UserModel.findByIdAndUpdate(_id, { nome, email, senha },{ new: true, runValidators: true });
    if(!userUpdate){
        return res.status(400).json({message: "Usuario não encontrado"});
    }
 
    res.send({ userUpdate });
  });





module.exports=router;