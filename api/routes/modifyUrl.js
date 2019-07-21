var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/', function (req, res, next) {
    req.app.locals.url = req.body.url
    res.send({ url: req.app.locals.url });
});

module.exports = router;
