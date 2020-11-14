var express = require('express');
var router = express.Router();

router.get('/', function (_, res) {
  res.render('register', {validacao: {}, body: {} });
});

module.exports = router;