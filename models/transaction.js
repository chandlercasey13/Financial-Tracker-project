const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  transaction: String,
  amount: Number,
  company: String,
  details: String,

  category: {
    type: String,
    enum: [
      "Food",
      "Entertainment",
      "Housing",
      "Subscriptions",
      "Utilities",
      "Health",
      "Debt",
      "Savings",
    ],
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transactionSchema;
