const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

schema = new mongoose.Schema({
  nome: {
    type: String,
  },
  email: {
    type: String,
  },
  senha: {
    type: String,
  }
});

schema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);

  this.senha = hash;
  
  next();
});

module.exports = mongoose.model('User', schema);
