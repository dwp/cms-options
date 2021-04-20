
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// live-in-uk / Where do you live?
router.post('/prototype2/iteration1/personalised/live-in-uk', function(req, res) {
  if (req.body['live-uk'] === 'gb') {
    res.redirect('other-parent-lives');
  } else if (req.body['live-uk'] === 'ni'){
    res.redirect('not-eligible-ni');
  } else {
    res.redirect('call');
  }
});



// other-parent-lives / Does the other parent live in England, Scotland, Wales or Northern Ireland?
router.post('/prototype2/iteration1/personalised/other-parent-lives', function(req, res) {
  if (req.body['other-parent-lives'] === 'uk') {
    res.redirect('court-order');
  } else {
    res.redirect('call');
  }
});


// court-order / Have you got a court decision about child maintenance payments?
router.post('/prototype2/iteration1/personalised/court-order', function(req, res) {
  if (req.body['maintenance-liability'] === 'yes') {
    res.redirect('call');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// paying-or-receiving / Have you got a court decision about child maintenance payments?
router.post('/prototype2/iteration1/personalised/paying-or-receiving', function(req, res) {
  if (req.body['paying-or-receiving'] === 'paying') {
    res.redirect('../pp/option1');
  } else {
    res.redirect('../rp/option1');
  }
});

//START PAYING PARENT / (Subfolder /pp)

// Choice PP
router.post('/prototype2/iteration1/pp/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply PP
router.post('/prototype2/iteration1/pp/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});

// Live in UK PP
router.post('/prototype2/iteration1/pp/live-in-uk', function(req, res) {
  if (req.body['live-uk'] === 'yes') {
    res.redirect('court-order');
  } else {
    res.redirect('not-eligible-uk');
  }
});

// Court Order PP
router.post('/prototype2/iteration1/pp/court-order', function(req, res) {
  if (req.body['maintenance-liability'] === 'yes') {
    res.redirect('not-eligible-court');
  } else {
    res.redirect('eligible');
  }
});


// Choice NOURN PP
router.post('/prototype2/iteration1/pp/no-urn/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply NOURN PP
router.post('/prototype2/iteration1/pp/no-urn/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});

//START RECEIVING PARENT / (Subfolder /rp)

// Choice RP
router.post('/prototype2/iteration1/rp/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply RP
router.post('/prototype2/iteration1/rp/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});

// Live in UK RP
router.post('/prototype2/iteration1/rp/live-in-uk', function(req, res) {
  if (req.body['live-uk'] === 'yes') {
    res.redirect('court-order');
  } else {
    res.redirect('not-eligible-uk');
  }
});

// Court Order RP
router.post('/prototype2/iteration1/rp/court-order', function(req, res) {
  if (req.body['maintenance-liability'] === 'yes') {
    res.redirect('not-eligible-court');
  } else {
    res.redirect('eligible');
  }
});


// Choice NOURN RP
router.post('/prototype2/iteration1/rp/no-urn/choice', function(req, res) {
  if (req.body['choice'] === 'private') {
    res.redirect('private');
  } else if (req.body['choice'] === 'use-cms'){
    res.redirect('apply');
  } else {
    res.redirect('help');
  }
});


// Apply NOURN RP
router.post('/prototype2/iteration1/rp/no-urn/apply', function(req, res) {
  if (req.body['apply-type'] === 'online') {
    res.redirect('intro');
  } else {
    res.redirect('phone');
  }
});


module.exports = router;
