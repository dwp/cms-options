
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Choice
router.post('/cycle2/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else {
    res.redirect('apply');
  }
});


// Apply
router.post('/cycle2/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});


// Choice NOURN
router.post('/cycle2/no-urn/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else {
    res.redirect('apply');
  }
});


// Apply NOURN
router.post('/cycle2/no-urn/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});



module.exports = router;
