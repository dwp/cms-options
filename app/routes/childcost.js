
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



//childcost

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
    res.redirect('childtype1');
  } else {
    res.redirect('childtypemultiple');
  }
});



// Routes end

module.exports = router;
