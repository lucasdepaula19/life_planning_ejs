const express = require('express');
const router = express.Router();
const Expense = require('../controllers/ExpenseController');

/* GET users listing. */
router.post('/', function (req, res, next) {
  Expense.newExpense(req.body);
  res.redirect('/report');
});

router.post('/del', function (req, res, next) {
  Expense.delExpense(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/', function (req, res, next) {

  Expense.getExpense()
    .then(result => {
      res.send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

});

router.get('/:id', function (req, res, next) {
  Expense.getExpenseId(req.params.id)
    .then(result => {
      res.status(result.code).send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;