var express = require('express');
var router = express.Router();
const Category = require('../controllers/CategoryController');
const Expense = require('../controllers/ExpenseController');
const Revenue = require('../controllers/RevenueController');
const InsertExpense = require('../controllers/InsertExpenseController');
const InsertRevenue = require('../controllers/InsertRevenueController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Category.getCategory()
  //   .then(result => {
  //     res.render('report', { obj_category: result.data });
  //   })
  //   .catch(err => {
  //     res.status(err.code).send(err);
  //   });

  load_dados()
    .then(result => {
      res.render('report', { objDados: result });
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;


async function load_dados() {
  let obj_dados = {};

  await Category.getCategory()
    .then(result => {
      obj_dados.categories = result.data;
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

  await Expense.getExpense()
    .then(result => {
      obj_dados.expenses = result.data;
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

  await Revenue.getRevenue()
    .then(result => {
      obj_dados.revenues = result.data;
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

  await InsertExpense.getInsertExpense()
    .then(result => {
      obj_dados.insertExpense = result.data;
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

  await InsertRevenue.getInsertRevenue()
    .then(result => {
      obj_dados.insertRevenue = result.data;
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

  return obj_dados;
};