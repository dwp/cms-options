
const express = require('express');
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// live-in-uk / Where do you live?
router.post('/cycle4/personalised/live-in-uk', function(req, res) {
  if (req.body['live-uk'] === 'gb') {
    res.redirect('other-parent-lives');
  } else if (req.body['live-uk'] === 'ni'){
    res.redirect('not-eligible-ni');
  } else {
    res.redirect('call');
  }
});



// other-parent-lives / Does the other parent live in England, Scotland, Wales or Northern Ireland?
router.post('/cycle4/personalised/other-parent-lives', function(req, res) {
  if (req.body['other-parent-lives'] === 'uk') {
    res.redirect('court-order');
  } else {
    res.redirect('call');
  }
});


// court-order / Have you got a court decision about child maintenance payments?
router.post('/cycle4/personalised/court-order', function(req, res) {
  if (req.body['maintenance-liability'] === 'yes') {
    res.redirect('call');
  } else {
    res.redirect('paying-or-receiving');
  }
});

// paying-or-receiving / Have you got a court decision about child maintenance payments?
router.post('/cycle4/personalised/paying-or-receiving', function(req, res) {
  if (req.body['paying-or-receiving'] === 'paying') {
    res.redirect('../../cycle4pp/option1');
  } else {
    res.redirect('../../cycle4rp/option1');
  }
});


module.exports = router;
