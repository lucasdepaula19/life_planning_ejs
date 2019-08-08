var express = require('express');
var router = express.Router();
const Category = require('../controllers/Category');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('task', { title: 'Life Planning' });
// });

router.get('/', function (_, res) {
  Category.get()
    .then(function (products) {
      console.log(products);
      res.render('task', { products });
    })
});

module.exports = router;