
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

//additional-costs
router.post('/childcost/additional-expenses', function(req, res) {
  if (req.body['additional'] === 'yes') {
    res.redirect('additional-1');
  } else {
    res.redirect('additional-1');
  }
});

//additional item 1
router.post('/childcost/additional-1', function(req, res) {
  if (req.body['items1'] === 'yes') {
    res.redirect('additional-1-details');
  } else {
    res.redirect('additional-1-details');
  }
});
//other expenses
router.post('/childcost/larger-items', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('cot');
  } else {
    res.redirect('cot');
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

//nappies
router.post('/childcost/nappies', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('nappies-cya');
  } else {
    res.redirect('nappies-cya');
  }
});

//cot
router.post('/childcost/cot', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('highchair');
  } else {
    res.redirect('highchair');
  }
});

//highchair
router.post('/childcost/highchair', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('larger-cya');
  } else {
    res.redirect('larger-cya');
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
