const express = require('express');
const router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Category.newCategory(req.body);
  res.redirect('/report');
});

router.delete('/:id', function(req, res, next) {
  Category.delCategory(req.body);
  res.redirect('/report');
});

router.get('/', function(req, res, next) {
  Category.getCategory();
  res.redirect('/report');
});

module.exports = router;