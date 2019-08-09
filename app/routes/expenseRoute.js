const express = require('express');
const router = express.Router();
const Expense = require('../controllers/ExpenseController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Expense.newExpense(req.body);
  res.redirect('/report');
});

module.exports = router;