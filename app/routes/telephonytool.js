
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})





//telephony

// children
router.post('/telephonytool/children', function(req, res) {
  if (req.body['children-under-16'] === 'yes') {
    res.redirect('check-eligibility');
  } else {
    res.redirect('under-20');
  }
});




// Routes end

module.exports = router;
