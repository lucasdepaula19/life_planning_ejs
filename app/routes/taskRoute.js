var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('task', { title: 'Life Planning' });
// });

router.get('/', function (_, res) {
  res.render('task');
});

module.exports = router;