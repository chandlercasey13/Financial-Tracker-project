const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transactions')


router.get('/', transactionCtrl.index)

router.post('/', transactionCtrl.postTransaction)


router.get('/new', transactionCtrl.newTransaction)

router.get('/:transactionId', transactionCtrl.displayuniqueTransaction)





module.exports = router