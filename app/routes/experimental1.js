
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Choice
router.post('/experimental1/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else {
    res.redirect('intro');
  }
});


// Apply
router.post('/experimental1/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});


module.exports = router;
