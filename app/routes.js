const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version
const version1 = require('./routes/version1');;
const govuk1 = require('./routes/govuk1');;
const experimental1 = require('./routes/experimental1');;

//copy the router use and update the sprint version
router.use(version1);
router.use(govuk1);
router.use(experimental1);

module.exports = router
