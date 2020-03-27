const express = require('express');
const router = express.Router();
const InsertExpense= require('../controllers/InsertExpenseController');

/* GET users listing. */
router.post('/', function (req, res, next) {
  InsertExpense.newInsertExpense(req.body);
  res.redirect('/report');
});

router.post('/del', function (req, res, next) {
  InsertExpense.delInsertExpense(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/', function (req, res, next) {

  InsertExpense.getInsertExpense()
    .then(result => {
      res.send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

});

router.get('/:id', function (req, res, next) {
  InsertExpense.getInsertExpenseId(req.params.id)
    .then(result => {
      res.status(result.code).send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;