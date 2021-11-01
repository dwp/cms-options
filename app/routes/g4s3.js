
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// start
router.post('/g4s3/start', function(req, res) {
    res.redirect('parent-live');
});


// research
router.post('/g4s3/research-questions', function(req, res) {
  if (req.body['research'] === 'yes') {``
    res.redirect('find-number');
  } else {
    res.redirect('reason');
  }
});


// find-number
router.post('/g4s3/find-number', function(req, res) {
    res.redirect('reason');
});


// reason
router.post('/g4s3/reason', function(req, res) {
    res.redirect('domestic-abuse');
});


// end-of-research
router.post('/g4s3/end-of-research', function(req, res) {
    res.redirect('domestic-abuse');
});



// domestic-abuse
router.post('/g4s3/domestic-abuse', function(req, res) {
  if (req.body['DA-question'] === 'da-yes') {``
    res.redirect('da-help');
  } else {
    res.redirect('court');
  }
});


// da-help
router.post('/g4s3/da-help', function(req, res) {
    res.redirect('court');
});


// parent-live
router.post('/g4s3/parent-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {``
    res.redirect('other-parent-lives');
  } else if (req.body['where-do-you-live'] === 'northern-ireland')  {
    res.redirect('choices');
  } else {
    res.redirect('parent-organisations');
  }
});

// choices
router.post('/g4s3/choices', function(req, res) {
    res.redirect('../index');
});


// parent-organisations
router.post('/g4s3/parent-organisations', function(req, res) {
  if (req.body['parent-organisation'] === 'yes') {``
    res.redirect('other-parent-lives');
  } else {
    res.redirect('parent-not-uk');
  }
});

// parent-not-uk
router.post('/g4s3/parent-not-uk', function(req, res) {
    res.redirect('../index');
});

// other-parent-lives
router.post('/g4s3/other-parent-lives', function(req, res) {
  if (req.body['other-parent-lives'] === 'uk') {``
    res.redirect('research-questions');
  } else if (req.body['other-parent-lives'] === 'unknown')  {
    res.redirect('bau');
  } else {
    res.redirect('other-parent-organisations');
  }
});

// other-parent-organisations
router.post('/g4s3/other-parent-organisations', function(req, res) {
  if (req.body['other-parent-organisation'] === 'yes') {``
    res.redirect('research-questions');
  } else {
    res.redirect('other-parent-not-uk');
  }
});

// other-parent-not-uk
router.post('/g4s3/other-parent-not-uk', function(req, res) {
    res.redirect('../index');
});

// court
router.post('/g4s3/court', function(req, res) {
  if (req.body['court'] === 'yes') {``
    res.redirect('court-decision');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-decision
router.post('/g4s3/court-decision', function(req, res) {
  if (req.body['court-decision'] === 'yes') {``
    res.redirect('court-when');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-when
router.post('/g4s3/court-when', function(req, res) {
  if (req.body['court-when'] === 'less-than') {``
    res.redirect('court-order-still-valid');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-order-still-valid
router.post('/g4s3/court-order-still-valid', function(req, res) {
    res.redirect('../index');
});

// paying-or-receiving
router.post('/g4s3/paying-or-receiving', function(req, res) {
  if (req.body['dtd'] === 'dtd-yes') {``
    res.redirect('used-calculator-rp');
  } else {
    res.redirect('used-calculator-pp');
  }
});

// other-parent-income
router.post('/g4s3/other-parent-income', function(req, res) {
  if (req.body['dtd'] === 'dtd-no') {``
    res.redirect('options-paying');
  } else {
    res.redirect('options-receiving');
  }
});


// options-paying
router.post('/g4s3/options-paying', function(req, res) {
    res.redirect('choice');
});


// options-receiving
router.post('/g4s3/options-receiving', function(req, res) {
    res.redirect('choice');
});


// choice
router.post('/g4s3/choice', function(req, res) {
  if (req.body['choice'] === 'own-arrangement') {``
    res.redirect('make-own-arrangement');
  } else if (req.body['choice'] === 'talk-op'){
    res.redirect('talk-to-OP');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('biological-parent');
  } else {
    res.redirect('user-research');
  }
});

// biological-parent
router.post('/g4s3/biological-parent', function(req, res) {
    res.redirect('user-research');
});

// talk-to-OP
router.post('/g4s3/talk-to-OP', function(req, res) {
    res.redirect('talk-to-OP-URN');
});

// talk-to-OP-URN
router.post('/g4s3/talk-to-OP-URN', function(req, res) {
    res.redirect('user-research');
});


// make-own-arrangement
router.post('/g4s3/make-own-arrangement', function(req, res) {
    res.redirect('user-research');
});


// user-research
router.post('/g4s3/user-research', function(req, res) {
    res.redirect('bau');
});


// used-calculator-rp
router.post('/g4s3/used-calculator-rp', function(req, res) {
  if (req.body['calc-used'] === 'calc-no') {``
    res.redirect('calc-info-rp');
  } else {
    res.redirect('options-receiving');
  }
  });


// used-calculator-pp
router.post('/g4s3/used-calculator-pp', function(req, res) {
  if (req.body['calc-used'] === 'calc-no') {``
    res.redirect('calc-info-pp');
  } else {
    res.redirect('options-paying');
  }
  });

// calc-info-pp
router.post('/g4s3/calc-info-pp', function(req, res) {
  res.redirect('options-paying');
});


// calc-info-rp
router.post('/g4s3/calc-info-rp', function(req, res) {
  res.redirect('options-receiving');
});



// Routes end

module.exports = router;
