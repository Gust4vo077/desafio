require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');

const atualizar=require('./src/routes/atualizar');
const exclusao=require('./src/routes/exclusao');
const listar=require('./src/routes/listar');
const cadastro=require('./src/routes/cadastro');
const login=require('./src/routes/login');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors("origin: 'http://localhost:4200',methods: ['GET', 'POST', 'PUT', 'DELETE'],allowedHeaders: 'Content-Type,Authorization',"))

mongoose.connect(process.env.MONGO_URI);

app.use('/api/v1', cadastro);
app.use('/api/v1', login);
app.use('/api/v1', atualizar);
app.use('/api/v1', exclusao);
app.use('/api/v1', listar);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})
