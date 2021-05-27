
const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



//childcost

// how many children logic
router.post('/childcost/howmanychildren', function(req, res) {
  if (req.body['how-many-children'] === '1') {
    res.redirect('childtype1');
  } else {
    res.redirect('childtypemultiple');
  }
});

// parent names


// Routes end

module.exports = router;
