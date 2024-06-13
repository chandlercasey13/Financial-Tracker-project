const express = require('express');
const router = express.Router();
const User = require('../models/user');
const transactionSchema = require('../models/transaction');


async function index (req,res){
    const currentUser = await User.findById(req.session.user._id)

const now = new Date();

const days = now.getDate();
const hours = now.getHours();
console.log(hours)
    

    res.render('transactions/index.ejs', {transactions : currentUser.transactions, now})
}



async function newTransaction (req,res){

    res.render('transactions/new.ejs')
}



async function postTransaction (req,res) {
   try{
   
    const currentUser = await User.findById(req.session.user._id);
    currentUser.transactions.push(req.body)
    await currentUser.save();
    }

    catch{
        res.redirect('/transactions/new')
    }
res.redirect('/transactions')
}

async function displayuniqueTransaction (req,res) {
    res.render('transactions/show.ejs')
}

async function editTransactionPage (req,res) {
   const currentUser= await User.findById(req.session.user._id)
   const currentTransaction = currentUser.transactions.id(req.params.transactionId)

   

 res.render(`transactions/edit.ejs`, {transaction: currentTransaction})
}

async function putEditedTransaction (req,res) {
    const currentUser= await User.findById(req.session.user._id)
    const currentTransaction = currentUser.transactions.id(req.params.transactionId)
    
    currentTransaction.set(req.body)

    await currentUser.save();




    res.redirect('/transactions')
}


async function deleteTransaction (req,res) {

    const currentUser = await User.findById(req.session.user._id);
    
    currentUser.transactions.id(req.params.transactionId).deleteOne();
   
    await currentUser.save();

    res.redirect('/transactions')


}



module.exports = {
    index,
    newTransaction,
    postTransaction,
    displayuniqueTransaction,
    editTransactionPage,
    putEditedTransaction,
    deleteTransaction

}