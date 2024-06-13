const mongoose = require('mongoose');
const transactionSchema  = require('../models/transaction')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  transactions: [transactionSchema],
    
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
