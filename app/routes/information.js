
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Routes start

// are-you-ready-to-make-a-decision

// router.post('/informationpageoption2/are-you-ready-to-make-a-decision.html', function(req, res) {
//   if (req.body['are-you-ready-to-make-a-decision'] === 'yes') {
//     res.redirect('what-do-you-want-to-do.html');
//   } else if (req.body['are-you-ready-to-make-a-decision'] === 'I-need-time-to-think'){
//     res.redirect('answer-some-questions-q2');
//   } else if (req.body['are-you-ready-to-make-a-decision'] === 'I-need-more-information'){
//     res.redirect('get-more-information');
//   } else {
//     res.redirect('are-you-ready-to-make-a-decision');
//   }
// });

// what-do-you-want-to-do
router.post('/information/what-do-you-want-to-do', function(req, res) {
  if (req.body['what-do-you-want-to-do'] === 'not-ready') {
    res.redirect('what-do-you-want-to-do-next');
  } else if (req.body['what-do-you-want-to-do'] === 'make-own-arrangement'){
    res.redirect('/prototype6/iteration1/make-your-own-arrangement');
  } else if (req.body['what-do-you-want-to-do'] === 'use-service'){
    res.redirect('/prototype6/iteration1/use-the-child-maintenance-service');
  }
});


// Routes end

module.exports = router;
