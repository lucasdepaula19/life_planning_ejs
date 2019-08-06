const express = require('express');
const router = express.Router();
const Category = require('../controllers/Category');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Category.newCategory(req.body);
});

module.exports = router;