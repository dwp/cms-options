
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// your-options
router.post('/prototype3iteration1/your-options', function(req, res) {
  if (req.body['choice'] === 'make-own-arrangement') {
    res.redirect('your-options');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('where-do-you-live');
  } else {
    res.redirect('get-more-information');
  }
});


// get-more-information
router.post('/prototype3iteration1/get-more-information', function(req, res) {
  if (req.body['more-info-choice'] === 'more-info-make-own-arrangement') {
    res.redirect('get-more-information');
  } else {
    res.redirect('where-do-you-live');
  }
});


// where-do-you-live
router.post('/prototype3iteration1/where-do-you-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'lives-in-gb') {
    res.redirect('where-does-the-other-parent-live');
  } else if (req.body['where-do-you-live'] === 'lives-in-northern-ireland'){
    res.redirect('contact-child-maintenance-choices');
  } else {
    res.redirect('you-need-to-call');
  }
});


// where-does-the-other-parent-live

router.post('/prototype3iteration1/where-does-the-other-parent-live', function(req, res) {
  if (req.body['where-does-the-other-parent-live'] === 'op-lives-in-uk') {
    res.redirect('have-you-had-a-court-decision');
  } else {
    res.redirect('you-need-to-call');
  }
});



// Routes end

module.exports = router;
