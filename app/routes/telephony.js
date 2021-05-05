const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})





//telephony






// Routes end

module.exports = router;
