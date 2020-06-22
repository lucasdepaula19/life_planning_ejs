const express = require('express');
const router = express.Router();
const InsertRevenue = require('../controllers/InsertRevenueController');

/* GET users listing. */
router.post('/', function (req, res, next) {
  InsertRevenue.newInsertRevenue(req.body);
  res.redirect('/report');
});

router.post('/del', function (req, res, next) {
  InsertRevenue.delInsertRevenue(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.post('/update', function (req, res, next) {
  InsertRevenue.updateInsertRevenue(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/', function (req, res, next) {

  InsertRevenue.getInsertRevenue()
    .then(result => {
      res.send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

});

router.get('/:id', function (req, res, next) {
  InsertRevenue.getInsertRevenueId(req.params.id)
    .then(result => {
      res.status(result.code).send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/del/:id', function (req, res, next) {
  InsertRevenue.delInsertRevenue(req.params.id)
    .then(result => {
      //res.status(result.code).send(result);
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;