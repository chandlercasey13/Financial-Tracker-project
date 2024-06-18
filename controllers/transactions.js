const express = require("express");
const router = express.Router();
const User = require("../models/user");
const transactionSchema = require("../models/transaction");

async function index(req, res) { try {
  const currentUser = await User.findById(req.session.user._id);

  const now = new Date();

  const days = now.getDate();
  const hours = now.getHours();

function categoriesAdded() {
  const addCategory = 
  {food: 0,
  entertainment: 0,
  housing: 0,
  subscriptions: 0,
  utilities: 0,
  health: 0,
  debt: 0,
  savings: 0,
  }

 currentUser.transactions.forEach((transaction) => {
  
  
  

  if(transaction.category === "Food") {
    addCategory.food += transaction.amount;
  }
  if(transaction.category === "Entertainment") {
    addCategory.entertainment += transaction.amount
  }
  if(transaction.category === "Housing") {
    addCategory.housing += transaction.amount
  }
  if(transaction.category === "Subscriptions") {
    addCategory.subscriptions += transaction.amount
  }
  if(transaction.category === "Utilities") {
    addCategory.utilities += transaction.amount
  }
  if(transaction.category === "Health") {
    addCategory.health += transaction.amount
  }
  if(transaction.category === "Debt") {
    addCategory.debt += transaction.amount
  }
  if(transaction.category === "Savings") {
    addCategory.savings += transaction.amount
 }
  

 
 
})

return addCategory
}


  res.render("transactions/index.ejs", {
    chartCategories: categoriesAdded(),
    transactions: currentUser.transactions,
    now,


  }) } catch  {
    res.redirect("/auth/sign-in");
  
  
  
  
  }  
  };


async function newTransaction(req, res) {
  res.render("transactions/new.ejs");
}

async function postTransaction(req, res) {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.transactions.unshift(req.body);
    await currentUser.save();
  } catch {
    res.redirect("/transactions/new");
  }
  res.redirect("/transactions");
}

async function displayuniqueTransaction(req, res) {
  res.render("transactions/show.ejs");
}

async function editTransactionPage(req, res) {
  const currentUser = await User.findById(req.session.user._id);
  const currentTransaction = currentUser.transactions.id(
    req.params.transactionId
  );

  res.render(`transactions/edit.ejs`, { transaction: currentTransaction });
}

async function putEditedTransaction(req, res) {
  const currentUser = await User.findById(req.session.user._id);
  const currentTransaction = currentUser.transactions.id(
    req.params.transactionId
  );

  currentTransaction.set(req.body);

  await currentUser.save();

  res.redirect("/transactions");
}

async function deleteTransaction(req, res) {
  const currentUser = await User.findById(req.session.user._id);

  currentUser.transactions.id(req.params.transactionId).deleteOne();

  await currentUser.save();

  res.redirect("/transactions");
}

module.exports = {
  index,
  newTransaction,
  postTransaction,
  displayuniqueTransaction,
  editTransactionPage,
  putEditedTransaction,
  deleteTransaction,
};
