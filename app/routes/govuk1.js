
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Page 1
router.post('/govuk1/page1', function(req, res) {
  if (req.body['page1'] === 'yes') {
    res.redirect('page2');
  } else {
    res.redirect('page3');
  }
});


module.exports = router;
