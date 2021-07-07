
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// where-do-you-live
router.post('/prototype5/iteration1/where-do-you-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'lives-in-gb') {
    res.redirect('where-does-the-other-parent-live');
  } else if (req.body['where-do-you-live'] === 'lives-in-northern-ireland'){
    res.redirect('contact-child-maintenance-choices');
  } else {
    res.redirect('outside-uk');
  }
});


// outside-uk

router.post('/prototype5/iteration1/outside-uk', function(req, res) {
  if (req.body['work-for-uk-organisation'] === 'no-uk-organisation') {
    res.redirect('cannot-use-child-maintenance-service');
  } else {
    res.redirect('where-does-the-other-parent-live');
  }
});


// where-does-the-other-parent-live

router.post('/prototype5/iteration1/where-does-the-other-parent-live', function(req, res) {
  if (req.body['where-does-the-other-parent-live'] === 'op-lives-in-uk') {
    res.redirect('will-you-be-paying-or-receiving');
  } else if (req.body['where-does-the-other-parent-live'] === 'op-lives-unknown') {
    res.redirect('cannot-use-child-maintenance-service');
  } else {
    res.redirect('other-parent-outside-uk');
  }
});


// other-parent-outside-uk

router.post('/prototype5/iteration1/other-parent-outside-uk', function(req, res) {
  if (req.body['op-work-for-uk-organisation'] === 'no-uk-organisation') {
    res.redirect('cannot-use-child-maintenance-service');
  } else {
    res.redirect('will-you-be-paying-or-receiving');
  }
});


// will-you-be-paying-or-receiving

router.post('/prototype5/iteration1/will-you-be-paying-or-receiving', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying') {
    res.redirect('have-you-had-a-court-decision');
  } else if (req.body['will-you-be-paying-or-receiving'] === 'receiving') {
    res.redirect('have-you-had-a-court-decision');
  } else {
    res.redirect('will-you-be-paying-or-receiving');
  }
});


// have-you-had-a-court-decision

router.post('/prototype5/iteration1/have-you-had-a-court-decision', function(req, res) {
  if (req.body['have-you-had-a-court-decision'] === 'yes') {
    res.redirect('cannot-use-child-maintenance-service');
  } else {
    res.redirect('make-your-own-arrangement');
  }
});


// what-do-you-want-to-do
router.post('/prototype5/iteration1/what-do-you-want-to-do', function(req, res) {
  if (req.body['what-do-you-want-to-do'] === 'make-own-arrangement') {
    res.redirect('help-making-your-own-arrangement');
  } else if (req.body['what-do-you-want-to-do'] === 'use-cms-pp'){
    res.redirect('your-application-reference-number');
  } else if (req.body['what-do-you-want-to-do'] === 'use-cms'){
    res.redirect('how-do-you-want-to-apply');
  } else {
    res.redirect('get-more-information');
  }
});


// how-do-you-want-to-apply

router.post('/prototype5/iteration1/how-do-you-want-to-apply', function(req, res) {
  if (req.body['how-do-you-want-to-apply'] === 'online') {
    res.redirect('your-application-reference-number');
  } else {
    res.redirect('your-application-reference-number');
  }
});


// your-application-reference-number

router.post('/prototype5/iteration1/your-application-reference-number', function(req, res) {
  if (req.body['send-reference'] === 'yes') {
    res.redirect('confirm-mobile-number');
  } else if (req.body['send-reference'] === 'yes2'){
    res.redirect('confirm-email');
  } else {
    res.redirect('write-down-your-reference');
  }
});



// email-or-text-message

router.post('/prototype5/iteration1/email-or-text-message', function(req, res) {
  if (req.body['email-or-text-message'] === 'email') {
    res.redirect('confirm-email');
  } else {
    res.redirect('confirm-mobile-number');
  }
});


// confirm-email

router.post('/prototype5/iteration1/confirm-email', function(req, res) {
  if (req.body['confirm-email'] === 'yes') {
    res.redirect('email-sent');
  } else {
    res.redirect('email-or-text-message');
  }
});


// confirm-mobile-number

router.post('/prototype5/iteration1/confirm-mobile-number', function(req, res) {
  if (req.body['confirm-mobile-number'] === 'yes') {
    res.redirect('text-message-sent');
  } else {
    res.redirect('email-or-text-message');
  }
});




// // email-sent
//
// router.post('/prototype5/iteration1/email-sent', function(req, res) {
//   if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
//     res.redirect('apply-by-phone');
//   } else {
//     res.redirect('start-your-application');
//   }
// });


// text-message-sent

router.post('/prototype5/iteration1/text-message-sent', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
    res.redirect('apply-by-phone');
  } else {
    res.redirect('start-your-application');
  }
});

// // write-down-your-reference
//
// router.post('/prototype5/iteration1/write-down-your-reference', function(req, res) {
//   if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
//     res.redirect('apply-by-phone');
//   } else {
//     res.redirect('start-your-application');
//   }
// });

// start-your-application

router.post('/prototype5/iteration1/start-your-application', function(req, res) {
  if (req.body['start-your-application'] === 'yes') {
    res.redirect(href="https://cmg-apply.herokuapp.com/apply/current/eligibility/intro");
  } else {
    res.redirect('apply-later');
  }
});

// Routes end

module.exports = router;
