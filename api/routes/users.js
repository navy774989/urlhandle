var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
  var url = req.app.locals.url
  res.send({ url: url });
});

module.exports = router;
