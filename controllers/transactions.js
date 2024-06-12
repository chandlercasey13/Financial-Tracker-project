const express = require('express')
const router = express.Router();
const User = require('../models/user')
const Transaction = require('../models/transaction')


async function index (req,res){
    const currentUser = await User.findById(req.session.user._id);

    res.render('transactions/index.ejs', {transactions : currentUser.transactions })
}



async function newTransaction (req,res){
    res.render('transactions/new.ejs')
}



async function postTransaction (req,res) {
   try{
   
    const currentUser = await User.findById(req.session.user._id);
    currentUser.transactions.push(req.body)
    await currentUser.save();
    console.log(currentUser)}

    catch{
        res.redirect('/transactions/new')
    }
res.redirect('/transactions')
}

async function displayuniqueTransaction (req,res) {
    res.render('transactions/show.ejs')
}

module.exports = {
    index,
    newTransaction,
    postTransaction,
    displayuniqueTransaction
}