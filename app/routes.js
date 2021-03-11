const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version
const version1 = require('./routes/version1');;
const govuk1 = require('./routes/govuk1');;
const cycle2 = require('./routes/cycle2');;
const cycle4 = require('./routes/cycle4');;
const cycle4pp = require('./routes/cycle4pp');;
const cycle4rp = require('./routes/cycle4rp');;
const personalised = require('./routes/personalised');;

//copy the router use and update the sprint version
router.use(version1);
router.use(govuk1);
router.use(cycle2);
router.use(cycle4);
router.use(cycle4pp);
router.use(cycle4rp);
router.use(personalised);

module.exports = router
