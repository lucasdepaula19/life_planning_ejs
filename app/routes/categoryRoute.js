const express = require('express');
const router = express.Router();
const Category = require('../controllers/CategoryController');

/* GET users listing. */
router.post('/', function (req, res, next) {
  Category.newCategory(req.body);
  res.redirect('/report');
});

router.post('/del', function (req, res, next) {
  Category.delCategory(req.body)
    .then(result => {
      res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

router.get('/', function (req, res, next) {

  Category.getCategory()
    .then(result => {
      res.send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });

});

router.get('/:id', function (req, res, next) {
  Category.getCategoryId(req.params.id)
    .then(result => {
      res.status(result.code).send(result);
      //res.redirect('/report');
    })
    .catch(err => {
      res.status(err.code).send(err);
    });
});

module.exports = router;