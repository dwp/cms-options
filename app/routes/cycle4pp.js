
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Choice
router.post('/prototype2iteration1pp/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply
router.post('/prototype2iteration1pp/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});

// Live in UK
router.post('/prototype2iteration1pp/live-in-uk', function(req, res) {
  if (req.body['live-uk'] === 'yes') {
    res.redirect('court-order');
  } else {
    res.redirect('not-eligible-uk');
  }
});

// Court Order
router.post('/prototype2iteration1pp/court-order', function(req, res) {
  if (req.body['maintenance-liability'] === 'yes') {
    res.redirect('not-eligible-court');
  } else {
    res.redirect('eligible');
  }
});


// Choice NOURN
router.post('/prototype2iteration1pp/no-urn/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply NOURN
router.post('/prototype2iteration1pp/no-urn/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});



module.exports = router;
