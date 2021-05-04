const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// your-options
router.post('/prototype3/iteration1/your-options', function(req, res) {
  if (req.body['choice'] === 'make-own-arrangement') {
    res.redirect('help-making-your-own-arrangement');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('where-do-you-live');
  } else {
    res.redirect('get-more-information');
  }
});


// get-more-information
router.post('/prototype3/iteration1/get-more-information', function(req, res) {
  if (req.body['more-info-choice'] === 'more-info-make-own-arrangement') {
    res.redirect('help-making-your-own-arrangement');
  } else {
    res.redirect('where-do-you-live');
  }
});


// where-do-you-live
router.post('/prototype3/iteration1/where-do-you-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'lives-in-gb') {
    res.redirect('where-does-the-other-parent-live');
  } else if (req.body['where-do-you-live'] === 'lives-in-northern-ireland'){
    res.redirect('contact-child-maintenance-choices');
  } else {
    res.redirect('you-need-to-call');
  }
});


// where-does-the-other-parent-live

router.post('/prototype3/iteration1/where-does-the-other-parent-live', function(req, res) {
  if (req.body['where-does-the-other-parent-live'] === 'op-lives-in-uk') {
    res.redirect('will-you-be-paying-or-receiving');
  } else {
    res.redirect('you-need-to-call');
  }
});


// will-you-be-paying-or-receiving

router.post('/prototype3/iteration1/will-you-be-paying-or-receiving', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying') {
    res.redirect('you-need-to-call');
  } else {
    res.redirect('have-you-had-a-court-decision');
  }
});


// have-you-had-a-court-decision

router.post('/prototype3/iteration1/have-you-had-a-court-decision', function(req, res) {
  if (req.body['have-you-had-a-court-decision'] === 'yes') {
    res.redirect('you-need-to-call');
  } else {
    res.redirect('how-do-you-want-to-apply');
  }
});


// how-do-you-want-to-apply

router.post('/prototype3/iteration1/how-do-you-want-to-apply', function(req, res) {
  if (req.body['how-do-you-want-to-apply'] === 'online') {
    res.redirect('eligibility-for-online-application');
  } else if (req.body['how-do-you-want-to-apply'] === 'phone'){
    res.redirect('apply-by-phone');
  } else {
    res.redirect('end');
  }
});


// your-application-reference-number

router.post('/prototype3/iteration1/your-application-reference-number', function(req, res) {
  if (req.body['send-reference'] === 'yes') {
    res.redirect('email-or-text-message');
  } else {
    res.redirect('write-down-your-reference');
  }
});


// email-or-text-message

router.post('/prototype3/iteration1/email-or-text-message', function(req, res) {
  if (req.body['email-or-text-message'] === 'email') {
    res.redirect('confirm-email');
  } else {
    res.redirect('confirm-mobile-number');
  }
});


// confirm-email

router.post('/prototype3/iteration1/confirm-email', function(req, res) {
  if (req.body['confirm-email'] === 'yes') {
    res.redirect('email-sent');
  } else {
    res.redirect('email-or-text-message');
  }
});


// confirm-mobile-number

router.post('/prototype3/iteration1/confirm-mobile-number', function(req, res) {
  if (req.body['confirm-mobile-number'] === 'yes') {
    res.redirect('text-message-sent');
  } else {
    res.redirect('email-or-text-message');
  }
});

// start-your-application

router.post('/prototype3/iteration1/start-your-application', function(req, res) {
  if (req.body['start-your-application'] === 'yes') {
    res.redirect('start-apply-journey');
  } else {
    res.redirect('apply-later');
  }
});



//telephony


router.post('/telephonytool/check-eligibility', function(req, res) {
    res.redirect('options');
});

router.post('/telephonytool/options', function(req, res) {
    res.redirect('choice');
});


// court-order / Have you got a court decision about child maintenance payments?
router.post('/telephonytool/organisations', function(req, res) {
  if (req.body['organisation-choice'] === 'yes') {
    res.redirect('court');
  } else {
    res.redirect('other');
  }
});

router.post('telephonytool/other-parent-live', function(req, res) {
  if (req.body['organisation-choice'] === 'yes') {
    res.redirect('court');
  } else {
    res.redirect('other');
  }
});

router.post('telephonytool/court', function(req, res) {
  if (req.body['court-choice'] === 'yes') {
    res.redirect('court-decision');
  } else {
    res.redirect('domestic-abuse');
  }
});



// Routes end

module.exports = router;
