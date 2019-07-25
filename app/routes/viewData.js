var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('viewData', { title: 'Life Planning' });
});

module.exports = router;
