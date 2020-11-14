const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController');
const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.post('/', [
  body('fname').notEmpty().withMessage('The field Full Name is required'),
  body('fuser').notEmpty().withMessage('The field User is required'),
  body('fpassword').notEmpty().withMessage('The field Password is required') ], function(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors.array());
    res.render('register', {validacao: errors.array(), body: req.body });
    return;
    // return res.status(400).json({ errors: errors.array() });
  }

  User.newUser(req.body);
  res.redirect('/');
});

// router.post('/del', function (req, res, next) {
//   Category.delCategory(req.body)
//     .then(result => {
//       res.redirect('/report');
//     })
//     .catch(err => {
//       res.status(err.code).send(err);
//     });
// });

// router.get('/', function (req, res, next) {

//   Category.getCategory()
//     .then(result => {
//       res.send(result);
//       //res.redirect('/report');
//     })
//     .catch(err => {
//       res.status(err.code).send(err);
//     });

// });

// router.get('/:id', function (req, res, next) {
//   Category.getCategoryId(req.params.id)
//     .then(result => {
//       res.status(result.code).send(result);
//       //res.redirect('/report');
//     })
//     .catch(err => {
//       res.status(err.code).send(err);
//     });
// });

module.exports = router;