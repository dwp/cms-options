
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

//your-name
router.post('/childcost/your-name', function(req, res) {
  if (req.body['your-name'] === '1') {
    res.redirect('parentnames');
  } else {
    res.redirect('parentnames');
  }
});

//children-names
router.post('/childcost/children-names', function(req, res) {
  if (req.body['child1'] === '1') {
    res.redirect('day-to-day');
  } else {
    res.redirect('day-to-day');
  }
});

//childcost
router.post('/childcost/parentnames', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('howmanychildren');
  } else {
    res.redirect('howmanychildren');
  }
});

//other expenses
router.post('/childcost/larger-items', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('other-expenses');
  } else {
    res.redirect('other-expenses');
  }
});

//other expenses
router.post('/childcost/other-expenses', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('nappies');
  } else {
    res.redirect('nappies');
  }
});

// parentnames
router.post('/childcost/parentnames', function(req, res) {
  if (req.body['parentname'] === 'yes') {
    res.redirect('parentnames-yes');
  } else {
    res.redirect('howmanychildren');
  }
});

// parentnames-yes
router.post('/childcost/parentnames', function(req, res) {
  if (req.body['parentname'] === 'yes') {
    res.redirect('parentnames-yes');
  } else {
    res.redirect('howmanychildren');
  }
});


// how many children
router.post('/childcost/howmanychildren', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('children-names');
  } else {
    res.redirect('children-names');
  }
});





// Routes end

module.exports = router;
