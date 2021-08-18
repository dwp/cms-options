
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// start
router.post('/g4s/start', function(req, res) {
    res.redirect('research-questions');
});


// research
router.post('/g4s/research-questions', function(req, res) {
  if (req.body['research'] === 'yes') {``
    res.redirect('find-number');
  } else {
    res.redirect('domestic-abuse');
  }
});


// find-number
router.post('/g4s/find-number', function(req, res) {
    res.redirect('reason');
});


// reason
router.post('/g4s/reason', function(req, res) {
    res.redirect('end-of-research');
});


// end-of-research
router.post('/g4s/end-of-research', function(req, res) {
    res.redirect('domestic-abuse');
});



// domestic-abuse
router.post('/g4s/domestic-abuse', function(req, res) {
  if (req.body['domestic-abuse'] === 'yes') {``
    res.redirect('da-help');
  } else {
    res.redirect('parent-live');
  }
});


// da-help
router.post('/g4s/da-help', function(req, res) {
    res.redirect('parent-live');
});


// parent-live
router.post('/g4s/parent-live', function(req, res) {
  if (req.body['where-do-you-live'] === 'uk') {``
    res.redirect('other-parent-lives');
  } else if (req.body['where-do-you-live'] === 'northern-ireland')  {
    res.redirect('choices');
  } else {
    res.redirect('parent-organisations');
  }
});

// choices
router.post('/g4s/choices', function(req, res) {
    res.redirect('../index');
});


// parent-organisations
router.post('/g4s/parent-organisations', function(req, res) {
  if (req.body['parent-organisation'] === 'yes') {``
    res.redirect('other-parent-lives');
  } else {
    res.redirect('parent-not-uk');
  }
});

// parent-not-uk
router.post('/g4s/parent-not-uk', function(req, res) {
    res.redirect('../index');
});

// other-parent-lives
router.post('/g4s/other-parent-lives', function(req, res) {
  if (req.body['other-parent-lives'] === 'uk') {``
    res.redirect('court');
  } else {
    res.redirect('other-parent-organisations');
  }
});

// other-parent-organisations
router.post('/g4s/other-parent-organisations', function(req, res) {
  if (req.body['other-parent-organisation'] === 'yes') {``
    res.redirect('court');
  } else {
    res.redirect('other-parent-not-uk');
  }
});

// other-parent-not-uk
router.post('/g4s/other-parent-not-uk', function(req, res) {
    res.redirect('../index');
});

// court
router.post('/g4s/court', function(req, res) {
  if (req.body['court'] === 'yes') {``
    res.redirect('court-decision');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-decision
router.post('/g4s/court-decision', function(req, res) {
  if (req.body['court-decision'] === 'yes') {``
    res.redirect('court-when');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-when
router.post('/g4s/court-when', function(req, res) {
  if (req.body['court-when'] === 'less-than') {``
    res.redirect('court-order-still-valid');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// court-order-still-valid
router.post('/g4s/court-order-still-valid', function(req, res) {
    res.redirect('../index');
});

// paying-or-receiving
router.post('/g4s/paying-or-receiving', function(req, res) {
  if (req.body['paying-or-receiving'] === 'paying') {``
    res.redirect('options-paying');
  } else {
    res.redirect('options-receiving');
  }
});

// options-paying
router.post('/g4s/options-paying', function(req, res) {
    res.redirect('choice');
});

// options-receiving
router.post('/g4s/options-receiving', function(req, res) {
    res.redirect('choice');
});

// choice
router.post('/g4s/choice', function(req, res) {
    res.redirect('bau');
});

// bau
router.post('/g4s/bau', function(req, res) {
    res.redirect('../index');
});


// Routes end

module.exports = router;
