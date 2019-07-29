var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logout', function (req, res) {
  console.log(req.session);
  req.logout();
  console.log(req.session);
});

module.exports = router;
