var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
  console.log(req.body);
  var username = req.body.username;

  //Store username/pw/whatever
  setTimeout(function() {
    res.json( {success: true, message: "Created user with username " + username} );
  }, 1500);

});

module.exports = router;
