
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// start
router.post('/g4s2/start', function(req, res) {
    res.redirect('parent-live');
});


// research
router.post('/g4s2/research-questions', function(req, res) {
  if (req.body['research'] === 'yes') {``
    res.redirect('find-number');
  } else {
    res.redirect('domestic-abuse');
  }
});


// find-number
router.post('/g4s2/find-number', function(req, res) {
    res.redirect('reason');
});


// reason
router.post('/g4s2/reason', function(req, res) {
    res.redirect('domestic-abuse');
});


// end-of-research
router.post('/g4s2/end-of-research', function(req, res) {
    res.redirect('domestic-abuse');
});



// domestic-abuse
router.post('/g4s2/domestic-abuse', function(req, res) {
  if (req.body['DA-question'] === 'da-yes') {``
    res.redirect('da-help');
  } else {
    res.redirect('court');
  }
});


// da-help
router.post('/g4s2/da-help', function(req, res) {
    res.redirect('court');
});


// parent-live
router.post('/g4s2/parent-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {``
    res.redirect('other-parent-lives');
  } else if (req.body['where-do-you-live'] === 'northern-ireland')  {
    res.redirect('choices');
  } else {
    res.redirect('parent-organisations');
  }
});

// choices
router.post('/g4s2/choices', function(req, res) {
    res.redirect('../index');
});


// parent-organisations
router.post('/g4s2/parent-organisations', function(req, res) {
  if (req.body['parent-organisation'] === 'yes') {``
    res.redirect('other-parent-lives');
  } else {
    res.redirect('parent-not-uk');
  }
});

// parent-not-uk
router.post('/g4s2/parent-not-uk', function(req, res) {
    res.redirect('g4s2/index.html');
});

// other-parent-lives
router.post('/g4s2/other-parent-lives', function(req, res) {
  if (req.body['other-parent-lives'] === 'uk') {``
    res.redirect('research-questions');
  } else if (req.body['other-parent-lives'] === 'unknown')  {
    res.redirect('bau2');
  } else {
    res.redirect('other-parent-organisations');
  }
});

// other-parent-organisations
router.post('/g4s2/other-parent-organisations', function(req, res) {
  if (req.body['other-parent-organisation'] === 'yes') {``
    res.redirect('research-questions');
  } else {
    res.redirect('other-parent-not-uk');
  }
});

// other-parent-not-uk
router.post('/g4s2/other-parent-not-uk', function(req, res) {
    res.redirect('../index');
});

// court
router.post('/g4s2/court', function(req, res) {
  if (req.body['court'] === 'yes') {``
    res.redirect('court-decision');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-decision
router.post('/g4s2/court-decision', function(req, res) {
  if (req.body['court-decision'] === 'yes') {``
    res.redirect('court-when');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-when
router.post('/g4s2/court-when', function(req, res) {
  if (req.body['court-when'] === 'less-than') {``
    res.redirect('court-order-still-valid');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-order-still-valid
router.post('/g4s2/court-order-still-valid', function(req, res) {
    res.redirect('../index');
});

// paying-or-receiving
router.post('/g4s2/paying-or-receiving', function(req, res) {
  if (req.body['dtd'] === 'dtd-yes') {``
    res.redirect('used-calculator-rp');
  } else {
    res.redirect('used-calculator-pp');
  }
});

// options-paying
router.post('/g4s2/options-paying', function(req, res) {
    res.redirect('choice');
});

// options-receiving
router.post('/g4s2/options-receiving', function(req, res) {
    res.redirect('choice');
});

// choice
router.post('/g4s2/choice', function(req, res) {
  if (req.body['choice'] === 'own-arrangement') {``
    res.redirect('make-own-arrangement');
  } else {
    res.redirect('bau');
  }
});

// make-own-arrangement
router.post('/g4s2/make-own-arrangement', function(req, res) {
    res.redirect('bau');
});

// bau
router.post('/g4s2/bau', function(req, res) {
    res.redirect('index.html');
});

// bau2
router.post('/g4s2/bau2', function(req, res) {
    res.redirect('index.html');
});

// used-calculator-rp
router.post('/g4s2/used-calculator-rp', function(req, res) {
  if (req.body['calc-used'] === 'calc-no') {``
    res.redirect('other-parent-income');
  } else {
    res.redirect('options-receiving');
  }
  });

// used-calculator-pp
router.post('/g4s2/used-calculator-pp', function(req, res) {
    res.redirect('options-paying');
});



// Routes end

module.exports = router;
