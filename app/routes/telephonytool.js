
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})





//telephony

// children
router.post('/telephonytool/children', function(req, res) {
  if (req.body['children-under-16'] === 'yes') {
    res.redirect('check-eligibility');
  } else {
    res.redirect('under-20');
  }
});


//check eligibility
router.post('/telephonytool/check-eligibility', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {
    res.redirect('other-parent-live');
  } else if (req.body['where-do-you-live'] === 'northern-ireland'){
    res.redirect('choices');
  } else {
    res.redirect('organisations');
  }
});


// court
router.post('/telephonytool/court', function(req, res) {
  if (req.body['court-choice'] === 'yes') {
    res.redirect('court-decision');
  } else {
    res.redirect('domestic-abuse');
  }
});

// court decision
router.post('/telephonytool/court-decision', function(req, res) {
  if (req.body['court-decision'] === 'yes') {
    res.redirect('court-when');
  } else {
    res.redirect('domestic-abuse');
  }
});

// court decision
router.post('/telephonytool/domestic-abuse', function(req, res) {
  if (req.body['da'] === 'yes') {``
    res.redirect('help');
  } else {
    res.redirect('options');
  }
});


//choice
router.post('/telephonytool/choice', function(req, res) {
  if (req.body['arrangement'] === 'own') {
    res.redirect('own-arrangement');
  } else if (req.body['arrangement'] === 'cms'){
    res.redirect('child-maintenance-service');
  } else {
    res.redirect('more-information');
  }
});

//how would you like to apply
router.post('/telephonytool/child-maintenance-service', function(req, res) {
  if (req.body['apply'] === 'phone') {``
    res.redirect('phone');
  } else {
    res.redirect('online-eligibility');
  }
});

//Used CMS before
router.post('/telephonytool/online-eligibility', function(req, res) {
  if (req.body['cms'] === 'yes') {``
    res.redirect('cms-same-parent');
  } else {
    res.redirect('urn-online');
  }
});

//Previous cms
router.post('/telephonytool/cms-same-parent', function(req, res) {
  if (req.body['previous-cms'] === 'yes') {``
    res.redirect('previous-reference');
  } else {
    res.redirect('urn-online');
  }
});

//organisations
router.post('/telephonytool/organisations', function(req, res) {
  if (req.body['organisation-choice'] === 'yes') {``
    res.redirect('other-parent-live');
  } else {
    res.redirect('end');
  }
});

//other parent live
router.post('/telephonytool/other-parent-live', function(req, res) {
  if (req.body['choice'] === 'england') {``
    res.redirect('paying-or-receiving');
  } else {
    res.redirect('other-parent-organisations');
  }
});


//other parent organisations
router.post('/telephonytool/other-parent-organisations', function(req, res) {
  if (req.body['organisation-choice'] === 'yes') {``
    res.redirect('paying-or-receiving');
  } else {
    res.redirect('end');
  }
});

//previous reference number
router.post('/telephonytool/previous-reference', function(req, res) {
  if (req.body['ref-no'] === 'yes') {``
    res.redirect('urn-online');
  } else {
    res.redirect('urn-online');
  }
});


//more information
router.post('/telephonytool/more-information', function(req, res) {
  if (req.body['more-info'] === 'cms') {
    res.redirect('calculation');
  } else if (req.body['more-info'] === 'more'){
    res.redirect('more-information-options');
  } else {
    res.redirect('/telephonytool/endscreens/end-time-to-think');
  }
});

// Routes end

module.exports = router;
