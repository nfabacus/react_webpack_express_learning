var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', scriptFileName: 'entry.js' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Signup', scriptFileName: 'signup.js'});
});


module.exports = router;
