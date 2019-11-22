var express = require('express');
var router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.get('/', function (req, res, next) {

  //let obj_category;

  Category.getCategory()
    .then(result => {
      res.render('report', { obj_category: result.data });
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;
