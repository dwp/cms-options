const express = require('express')
const router = express.Router()



router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// children
router.post('/telephonytool/children', function(req, res) {
  if (req.body['children-under-16'] === 'yes') {
    res.redirect('check-eligibility');
  } else {
    res.redirect('under-20');
  }
});


//check-eligibility
router.post('/telephonytool/check-eligibility', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {
    res.redirect('other-parent-live');
  } else if (req.body['where-do-you-live'] === 'northern-ireland'){
    res.redirect('choices');
  } else {
    res.redirect('organisations');
  }
});

//court-choice
router.post('/telephonytool/court', function(req, res) {
  if (req.body['court-choice'] === 'yes') {
    res.redirect('court-decision');
  } else {
    res.redirect('domestic-abuse');
  }
});
// Routes end

module.exports = router;
