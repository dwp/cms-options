const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version
const prototype1iteration1 = require('./routes/prototype1iteration1');;
const prototype1iteration2 = require('./routes/prototype1iteration2');;
const prototype2iteration1 = require('./routes/prototype2iteration1');;
const prototype3iteration1 = require('./routes/prototype3iteration1');;
const prototype4iteration1 = require('./routes/prototype4iteration1');;
const prototype4iteration2 = require('./routes/prototype4iteration2');;
const telephonytool = require('./routes/telephonytool');;
const childcost = require('./routes/childcost');;

//copy the router use and update the sprint version
router.use(prototype1iteration1);
router.use(prototype1iteration2);
router.use(prototype2iteration1);
router.use(prototype3iteration1);
router.use(prototype4iteration1);
router.use(prototype4iteration2);
router.use(telephonytool);
router.use(childcost);

module.exports = router
