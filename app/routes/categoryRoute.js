const express = require('express');
const router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Category.newCategory(req.body);
  res.redirect('/report');
});

module.exports = router;