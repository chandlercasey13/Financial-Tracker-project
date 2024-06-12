const mongoose = require('mongoose');

const transactionSchema = ({
amount: Number,
company: String,
transaction: String,

category: {
   type:String,
    enum: ['Food','Entertainment','Rent']

},

})



const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {Transaction,
    transactionSchema
};