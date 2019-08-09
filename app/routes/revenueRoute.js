const express = require('express');
const router = express.Router();
const Revenue = require('../controllers/RevenueController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Revenue.newRevenue(req.body);
  res.redirect('/report');
});

module.exports = router;