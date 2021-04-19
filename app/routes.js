const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version
const version1 = require('./routes/version1');;
const govuk1 = require('./routes/govuk1');;
const prototype1iteration1 = require('./routes/prototype1iteration1');;
const prototype1iteration2 = require('./routes/prototype1iteration2');;
const prototype2iteration1 = require('./routes/prototype2iteration1');;
const prototype3iteration1 = require('./routes/prototype3iteration1');;

//copy the router use and update the sprint version
router.use(version1);
router.use(govuk1);
router.use(prototype1iteration1);
router.use(prototype1iteration2);
router.use(prototype2iteration1);
router.use(prototype3iteration1)

module.exports = router
