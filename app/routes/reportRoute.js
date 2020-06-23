var express = require('express');
var router = express.Router();
const Category = require('../controllers/CategoryController');
const Expense = require('../controllers/ExpenseController');
const Revenue = require('../controllers/RevenueController');
const InsertExpense = require('../controllers/InsertExpenseController');
const InsertRevenue = require('../controllers/InsertRevenueController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let data = new Date();
  let fmonth = data.getMonth() + 1;
  let fyear = data.getFullYear();

  if(req.query.fmonth != undefined && req.query.fyear != undefined){
    fmonth = req.query.fmonth;
    fyear = req.query.fyear;
  }
  
  load_dados()
    .then(result => {
      res.render('report', { objDados: result, month: fmonth, year: fyear });
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;

async function load_dados() {
  let obj_dados = {};

  //substituir por promise.all para execução de vários metodos de forma assincrona
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