var express = require('express');
var router = express.Router();
const Category = require('../controllers/Category');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('viewData', { title: 'Life Planning' });
});

module.exports = router;
