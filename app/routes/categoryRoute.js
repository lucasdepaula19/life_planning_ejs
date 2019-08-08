const express = require('express');
const router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.post('/', function(req, res, next) {
  Category.newCategory(req.body);
  res.send("Categoria Criada");
});

module.exports = router;