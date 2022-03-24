const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version
const radioButtonRedirect = require('radio-button-redirect')
const prototype1iteration1 = require('./routes/prototype1iteration1');;
const prototype1iteration2 = require('./routes/prototype1iteration2');;
const prototype2iteration1 = require('./routes/prototype2iteration1');;
const prototype3iteration1 = require('./routes/prototype3iteration1');;
const prototype4iteration1 = require('./routes/prototype4iteration1');;
const prototype4iteration2 = require('./routes/prototype4iteration2');;
const prototype5iteration1 = require('./routes/prototype5iteration1');;
const prototype6iteration1 = require('./routes/prototype6iteration1');;
const informationpageoption2 = require('./routes/informationpageoption2');;
const telephonytool = require('./routes/telephonytool');;
const telephonytool2 = require('./routes/telephonytool2');;
const childcost = require('./routes/childcost');;
const nonuk = require('./routes/nonuk');;
const urnerror = require('./routes/urnerror');;
const g4s1 = require('./routes/g4s1');;
const g4s2 = require('./routes/g4s2');;



//copy the router use and update the sprint version
router.use(radioButtonRedirect)
router.use(prototype1iteration1);
router.use(prototype1iteration2);
router.use(prototype2iteration1);
router.use(prototype3iteration1);
router.use(prototype4iteration1);
router.use(prototype4iteration2);
router.use(prototype5iteration1);
router.use(prototype6iteration1);
router.use(informationpageoption2);
router.use(telephonytool);
router.use(telephonytool2);
router.use(childcost);
router.use(nonuk);
router.use(urnerror);
router.use(g4s1);
router.use(g4s2);

module.exports = router
