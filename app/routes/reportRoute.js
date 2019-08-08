var express = require('express');
var router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('report', { title: 'Life Planning' });
});

module.exports = router;
