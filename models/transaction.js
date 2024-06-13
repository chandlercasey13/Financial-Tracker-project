const mongoose = require('mongoose');

const transactionSchema =  new mongoose.Schema({
amount: Number,
company: String,
transaction: String,

category: {
   type:String,
    enum: ['Food','Entertainment','Rent']

},

})



const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transactionSchema;