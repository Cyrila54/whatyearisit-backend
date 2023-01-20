var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    let year = new Date();
    year=year.getFullYear().toString();

    res.json({year:year})

});

module.exports = router;
