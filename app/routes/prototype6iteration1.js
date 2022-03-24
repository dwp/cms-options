
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// answer-some-questions

router.post('/prototype6/iteration1/answer-some-questions', function(req, res) {
  if (req.body['answer-some-questions'] === 'yes') {
    res.redirect('answer-some-questions-q1');
  } else {
    res.redirect('where-do-you-live');
  }
});

// answer-some-questions-q1

router.post('/prototype6/iteration1/answer-some-questions-q1', function(req, res) {
  if (req.body['how-did-you-find'] === 'calculator') {
    res.redirect('answer-some-questions-q2');
  } else if (req.body['how-did-you-find'] === 'work-coach'){
    res.redirect('answer-some-questions-q2');
  } else if (req.body['how-did-you-find'] === 'somewhere-else'){
    res.redirect('answer-some-questions-q2');
  } else if (req.body['how-did-you-find'] === 'prefer-not-to-say'){
    res.redirect('answer-some-questions-q2');
  } else {
    res.redirect('answer-some-questions-q2');
  }
});

// answer-some-questions-q2

router.post('/prototype6/iteration1/answer-some-questions-q2', function(req, res) {
  if (req.body['reason-for-using'] === 'general-info') {
    res.redirect('where-do-you-live');
  } else if (req.body['reason-for-using'] === 'apply-to-use-cms'){
    res.redirect('where-do-you-live');
  } else if (req.body['reason-for-using'] === 'make-own-arrangement'){
    res.redirect('where-do-you-live');
  } else if (req.body['reason-for-using'] === 'find-out-how-much'){
    res.redirect('where-do-you-live');
  } else if (req.body['reason-for-using'] === 'something-else'){
    res.redirect('where-do-you-live');
  } else if (req.body['reason-for-using'] === 'prefer-not-to-say'){
    res.redirect('where-do-you-live');
  } else {
    res.redirect('where-do-you-live');
  }
});



// answer-some-questions-q3

router.post('/prototype6/iteration1/answer-some-questions-q3', function(req, res) {
  if (req.body['why-by-phone'] === 'accessibility') {
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'english-not-first-language'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'domestic-abuse'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'questions-before-apply'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'struggle-to-use-online'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'calling-easier'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'dont-want-personal-details-online'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'something-else'){
    res.redirect('your-application-reference-number');
  } else if (req.body['why-by-phone'] === 'prefer-not-to-say'){
    res.redirect('your-application-reference-number');
  } else {
    res.redirect('your-application-reference-number');
  }
});

// where-do-you-live
router.post('/prototype6/iteration1/where-do-you-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'lives-in-gb') {
    res.redirect('where-does-the-other-parent-live');
  } else if (req.body['where-do-you-live'] === 'lives-in-northern-ireland'){
    res.redirect('contact-child-maintenance-choices');
  } else {
    res.redirect('outside-uk');
  }
});


// outside-uk

router.post('/prototype6/iteration1/outside-uk', function(req, res) {
  if (req.body['work-for-uk-organisation'] === 'no-uk-organisation') {
    res.redirect('applicant-outside-uk');
  } else {
    res.redirect('where-does-the-other-parent-live');
  }
});


// where-does-the-other-parent-live

router.post('/prototype6/iteration1/where-does-the-other-parent-live', function(req, res) {
  if (req.body['where-does-the-other-parent-live'] === 'op-lives-in-uk') {
    res.redirect('will-you-be-paying-or-receiving');
  } else if (req.body['where-does-the-other-parent-live'] === 'op-lives-unknown') {
    res.redirect('not-sure-where-parent-lives');
  } else {
    res.redirect('other-parent-outside-uk');
  }
});


// other-parent-outside-uk

router.post('/prototype6/iteration1/other-parent-outside-uk', function(req, res) {
  if (req.body['op-work-for-uk-organisation'] === 'no-uk-organisation') {
    res.redirect('other-parent-outside-uk-no-organisations');
  } else {
    res.redirect('will-you-be-paying-or-receiving');
  }
});


// will-you-be-paying-or-receiving

router.post('/prototype6/iteration1/will-you-be-paying-or-receiving', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying') {
    res.redirect('have-you-had-a-court-decision');
  } else if (req.body['will-you-be-paying-or-receiving'] === 'receiving') {
    res.redirect('have-you-had-a-court-decision');
  } else {
    res.redirect('will-you-be-paying-or-receiving');
  }
});


// have-you-had-a-court-decision

router.post('/prototype6/iteration1/have-you-had-a-court-decision', function(req, res) {
  if (req.body['have-you-had-a-court-decision'] === 'yes') {
    res.redirect('cannot-use-child-maintenance-service');
  } else {
    res.redirect('make-your-own-arrangement');
  }
});


// what-do-you-want-to-do
router.post('/prototype6/iteration1/what-do-you-want-to-do', function(req, res) {
  if (req.body['what-do-you-want-to-do'] === 'make-own-arrangement') {
    res.redirect('help-making-your-own-arrangement');
  } else if (req.body['what-do-you-want-to-do'] === 'use-cms-pp'){
    res.redirect('how-do-you-want-to-apply');
  } else if (req.body['what-do-you-want-to-do'] === 'use-cms'){
    res.redirect('how-do-you-want-to-apply');
  } else {
    res.redirect('get-more-information');
  }
});

// get-more-information
router.post('/prototype6/iteration1/get-more-information', function(req, res) {
  if (req.body['more-info-choice'] === 'more-info-make-own-arrangement') {
    res.redirect('help-making-your-own-arrangement');
  } else {
    res.redirect('your-application-reference-number-online');
  }
});

//how-do-you-want-to-apply
router.post('/prototype6/iteration1/how-do-you-want-to-apply', function(req, res) {
  if (req.body['how-do-you-want-to-apply'] === 'online') {
    res.redirect('your-application-reference-number-online');
  } else {
    res.redirect('your-application-reference-number');
  }
});


// your-application-reference-number

router.post('/prototype6/iteration1/your-application-reference-number', function(req, res) {
  if (req.body['send-reference'] === 'yes') {
    res.redirect('confirm-mobile-number');
  } else if (req.body['send-reference'] === 'yes2'){
    res.redirect('confirm-email');
  } else {
    res.redirect('write-down-your-reference');
  }
});

router.post('/prototype6/iteration1/your-application-reference-number-online', function(req, res) {
  if (req.body['send-reference'] === 'yes') {
    res.redirect('confirm-mobile-number-online');
  } else if (req.body['send-reference'] === 'yes2'){
    res.redirect('confirm-email-online');
  } else {
    res.redirect('write-down-your-reference');
  }
});




// email-or-text-message

router.post('/prototype6/iteration1/email-or-text-message', function(req, res) {
  if (req.body['email-or-text-message'] === 'email') {
    res.redirect('confirm-email');
  } else {
    res.redirect('confirm-mobile-number');
  }
});


// email-sent-by-phone
router.post('/prototype6/iteration1/email-sent-by-phone', function(req, res) {
  const howDoYouWantToApply = req.session.data['how-do-you-want-to-apply']
  if (howDoYouWantToApply === 'online') {
    res.redirect('https://cmg-apply.herokuapp.com/apply/february2022PP/1-start-eligibility/welcome');
  } else {
    res.redirect('apply-by-phone');
  }
});




// confirm-email

router.post('/prototype6/iteration1/confirm-email', function(req, res) {
  if (req.body['confirm-email'] === 'yes') {
    res.redirect('email-sent-by-phone');
  } else {
    res.redirect('your-application-reference-number');
  }
});



router.post('/prototype6/iteration1/confirm-email-online', function(req, res) {
  if (req.body['confirm-email'] === 'yes') {
    res.redirect('email-sent');
  } else {
    res.redirect('your-application-reference-number-online');
  }
});




// confirm-mobile-number

router.post('/prototype6/iteration1/confirm-mobile-number', function(req, res) {
  if (req.body['confirm-mobile-number'] === 'yes') {
    res.redirect('text-message-sent');
  } else {
    res.redirect('your-application-reference-number');
  }
});

router.post('/prototype6/iteration1/confirm-mobile-number-online', function(req, res) {
  if (req.body['confirm-mobile-number'] === 'yes') {
    res.redirect('text-message-sent-online');
  } else {
    res.redirect('your-application-reference-number-online');
  }
});



// // email-sent
//
// router.post('/prototype6/iteration1/email-sent', function(req, res) {
//   if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
//     res.redirect('apply-by-phone');
//   } else {
//     res.redirect('start-your-application');
//   }
// });


// text-message-sent

router.post('/prototype6/iteration1/text-message-sent-online', function(req, res) {
  if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
    res.redirect('apply-by-phone');
  } else {
    res.redirect('start-your-application');
  }
});

// // write-down-your-reference
//
// router.post('/prototype6/iteration1/write-down-your-reference', function(req, res) {
//   if (req.body['will-you-be-paying-or-receiving'] === 'paying'){
//     res.redirect('apply-by-phone');
//   } else {
//     res.redirect('start-your-application');
//   }
// });

// start-your-application

router.post('/prototype6/iteration1/start-your-application', function(req, res) {
  if (req.body['start-your-application'] === 'yes') {
    res.redirect(href="https://cmg-apply.herokuapp.com/apply/current/eligibility/intro");
  } else {
    res.redirect('apply-later');
  }
});

// Routes end

module.exports = router;
