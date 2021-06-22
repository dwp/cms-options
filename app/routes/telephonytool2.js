
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

//telephony
router.post('/telephonytool2/index', function(req, res) {
  if (req.body['test-numbers'] === '4') {
    res.redirect('test');
  } else {
    res.redirect('domestic-abuse');
  }
});


//telephony
router.post('/telephonytool2/index', function(req, res) {
  if (req.body['test-numbers'] === '4') {
    res.redirect('test');
  } else {
    res.redirect('under-20');
  }
});

//paying or receiving
router.post('/telephonytool2/paying-or-receiving', function(req, res) {
  if (req.body['paying-or-receiving'] === 'paying') {
    res.redirect('court');
  } else {
    res.redirect('court');
  }
});

// children
router.post('/telephonytool2/children', function(req, res) {
  if (req.body['children-under-16'] === 'yes') {
    res.redirect('check-eligibility');
  } else {
    res.redirect('under-20');
  }
});


router.post('/telephonytool2/under-20', function(req, res) {
  if (req.body['children-under-20'] === 'yes') {
    res.redirect('check-eligibility');
  } else {
    res.redirect('/telephonytool2/endscreens/under-20-end');
  }
});

router.post('/telephonytool2/court-when', function(req, res) {
  if (req.body['court-decision'] === 'no') {
    res.redirect('options');
  } else {
    res.redirect('end-court-last-12');
  }
});

router.post('/telephonytool2/transfer-to-apply', function(req, res) {
  if (req.body['transfer'] === 'yes') {
    res.redirect('phone-email');
  } else {
    res.redirect('end-phone');
  }
});





//check eligibility
router.post('/telephonytool2/check-eligibility', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {
    res.redirect('other-parent-live');
  } else if (req.body['where-do-you-live'] === 'northern-ireland'){
    res.redirect('choices');
  } else {
    res.redirect('organisations');
  }
});


// court
router.post('/telephonytool2/court', function(req, res) {
  if (req.body['court-choice'] === 'yes') {
    res.redirect('court-decision');
  } else {
    res.redirect('options');
  }
});

// court decision
router.post('/telephonytool2/court-decision', function(req, res) {
  if (req.body['court-decision'] === 'yes') {
    res.redirect('court-when');
  } else {
    res.redirect('options');
  }
});

// court decision
router.post('/telephonytool2/domestic-abuse', function(req, res) {
  if (req.body['da'] === 'yes') {``
    res.redirect('help');
  } else {
    res.redirect('children');
  }
});


//choice
router.post('/telephonytool2/choice', function(req, res) {
  if (req.body['arrangement'] === 'own') {
    res.redirect('own-arrangement');
  } else if (req.body['arrangement'] === 'cms'){
    res.redirect('child-maintenance-service');
  } else {
    res.redirect('more-information');
  }
});

//how would you like to apply
router.post('/telephonytool2/child-maintenance-service', function(req, res) {
  if (req.body['apply'] === 'phone') {``
    res.redirect('phone');
  } else {
    res.redirect('online-eligibility');
  }
});

//Used CMS before
router.post('/telephonytool2/online-eligibility', function(req, res) {
  if (req.body['arrangement'] === 'yes') {``
    res.redirect('urn-online');
  } else {
    res.redirect('not-eligible');
  }
});

router.post('/telephonytool2/online-eligibility', function(req, res) {
  if (req.body['arrangement-1'] === 'yes') {``
    res.redirect('urn-online');
  } else {
    res.redirect('end');
  }
});
router.post('/telephonytool2/online-eligibility', function(req, res) {
  if (req.body['arrangement-2'] === 'yes') {``
    res.redirect('cms-before');
  } else {
    res.redirect('end');
  }
});

router.post('/telephonytool2/cms-before', function(req, res) {
  if (req.body['cms-before'] === 'yes') {``
    res.redirect('cms-same-parent');
  } else {
    res.redirect('urn-online');
  }
});


//Previous cms
router.post('/telephonytool2/cms-same-parent', function(req, res) {
  if (req.body['previous-cms'] === 'yes') {``
    res.redirect('previous-reference');
  } else {
    res.redirect('urn-online');
  }
});

//organisations
router.post('/telephonytool2/organisations', function(req, res) {
  if (req.body['organisation-choice'] === 'yes') {``
    res.redirect('other-parent-live');
  } else {
    res.redirect('end');
  }
});

//other parent live
router.post('/telephonytool2/other-parent-live', function(req, res) {
  if (req.body['choice'] === 'england') {``
    res.redirect('paying-or-receiving');
  } else {
    res.redirect('other-parent-organisations');
  }
});





//previous reference number
router.post('/telephonytool2/previous-reference', function(req, res) {
  if (req.body['ref-no'] === 'yes') {``
    res.redirect('urn-online');
  } else {
    res.redirect('urn-online');
  }
});

router.post('/telephonytool2/help', function(req, res) {
  if (req.body['domestic-abuse-info'] === 'yes') {``
    res.redirect('children');
  } else {
    res.redirect('children');
  }
});




//more information
router.post('/telephonytool2/more-information', function(req, res) {
  if (req.body['more-info'] === 'cms') {
    res.redirect('calculation');
  } else if (req.body['more-info'] === 'more'){
    res.redirect('own-arrangement-2');
  } else {
    res.redirect('/telephonytool2/endscreens/end-time-to-think');
  }
});

// Routes end

module.exports = router;
