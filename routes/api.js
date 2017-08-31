var express = require('express');
var router = express.Router();

var add = require('../api/add');
var div = require('../api/div');
var sub = require('../api/sub');
var mul = require('../api/mul');


router.post('/add', add.add);
router.post('/div', div.div);
router.post('/sub', sub.sub);
router.post('/mul', mul.mul);

module.exports = router;
