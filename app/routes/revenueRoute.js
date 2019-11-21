const express = require('express');
const router = express.Router();
const Revenue = require('../controllers/RevenueController');

/* GET users listing. */
router.post('/', function (req, res, next) {
  Revenue.newRevenue(req.body);
  res.redirect('/report');
});

router.post('/del', function (req, res, next) {
  Revenue.delRevenue(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/', function (req, res, next) {

  Revenue.getRevenue()
    .then(result => {
      res.send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

});

router.get('/:id', function (req, res, next) {
  Revenue.getRevenueId(req.params.id)
    .then(result => {
      res.status(result.code).send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;