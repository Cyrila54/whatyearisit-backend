var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/year', function(req, res, next) {
    let year = new Date();
    year=year.getFullYear();

    res.json({year:year})

});

module.exports = router;
