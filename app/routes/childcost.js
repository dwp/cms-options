
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
    res.redirect('other-parent');
  } else {
    res.redirect('other-parent');
  }
});
//your-name
router.post('/childcost/other-parent', function(req, res) {
  if (req.body['other-parent'] === 'yes') {
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
    res.redirect('children-names');
  } else {
    res.redirect('children-names');
  }
});

//additional-costs
router.post('/childcost/additional-expenses', function(req, res) {
  if (req.body['additional-1'] === 'yes') {
    res.redirect('additional-1-details');
  } else {
    res.redirect('add-another-child');
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

//additional item 1
router.post('/childcost/additional-1-details', function(req, res) {
  if (req.body['items1'] === 'yes') {
    res.redirect('add-another-additional-item');
  } else {
    res.redirect('add-another-additional-item');
  }
});

//additional item 2
router.post('/childcost/additional-2-details', function(req, res) {
  if (req.body['items1'] === 'yes') {
    res.redirect('add-another-additional-item2');
  } else {
    res.redirect('add-another-additional-item2');
  }
});

//additional item 2 child 2
router.post('/childcost/child2/additional-1-details', function(req, res) {
  if (req.body['child2items1'] === 'yes') {
    res.redirect('add-another-additional-item');
  } else {
    res.redirect('add-another-additional-item');
  }
});

//additional item 2
router.post('/childcost/child2/additional-2-details', function(req, res) {
  if (req.body['child2items2'] === 'yes') {
    res.redirect('add-another-additional-item2');
  } else {
    res.redirect('add-another-additional-item2');
  }
});


//other expenses
router.post('/childcost/add-another-additional-item', function(req, res) {
  if (req.body['additional-2'] === 'yes') {
    res.redirect('additional-2-details');
  } else {
    res.redirect('additional-cya');
  }
});

//other expenses 2
router.post('/childcost/add-another-additional-item2', function(req, res) {
  if (req.body['additional-2'] === 'yes') {
    res.redirect('additional-cya');
  } else {
    res.redirect('additional-cya');
  }
});

//additional item 2
router.post('/childcost/additional-2', function(req, res) {
  if (req.body['items2'] === 'yes') {
    res.redirect('additional-2-details');
  } else {
    res.redirect('additional-2-details');
  }
});

//other expenses child2
router.post('/childcost/child2/add-another-additional-item', function(req, res) {
  if (req.body['additional-2'] === 'yes') {
    res.redirect('additional-cya');
  } else {
    res.redirect('additional-cya');
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

// add another child
router.post('/childcost/add-another-child', function(req, res) {
  if (req.body['add-child'] === 'yes') {
    res.redirect('child2/day-to-day');
  } else {
    res.redirect('overall-cya');
  }
});

//nappies 2
router.post('/childcost/child2/nappies', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('nappies-cya');
  } else {
    res.redirect('nappies-cya');
  }
});


//other expenses 2
router.post('/childcost/child2/larger-items', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('cot');
  } else {
    res.redirect('cot');
  }
});

//cot 2
router.post('/childcost/child2/cot', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('highchair');
  } else {
    res.redirect('highchair');
  }
});


//highchair
router.post('/childcost/child2/highchair', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('larger-cya');
  } else {
    res.redirect('larger-cya');
  }
});

//additional-costs 2
router.post('/childcost/child2/additional-expenses', function(req, res) {
  if (req.body['additional-1'] === 'yes') {
    res.redirect('additional-1-details');
  } else {
    res.redirect('/childcost/overall-cya');
  }
});
// Routes end

module.exports = router;
