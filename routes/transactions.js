const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transactions')


router.get('/', transactionCtrl.index)

router.post('/create', transactionCtrl.postTransaction)


router.get('/new', transactionCtrl.newTransaction)



router.get('/:transactionId', transactionCtrl.displayuniqueTransaction)



router.get('/:transactionId/edit', transactionCtrl.editTransactionPage)

router.put('/:transactionId', transactionCtrl.putEditedTransaction)

router.delete('/:transactionId', transactionCtrl.deleteTransaction)




module.exports = router