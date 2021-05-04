const express = require('express')
const router = express.Router()


router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})





//telephony




router.post('/telephonytool/organisations', function(req, res) {
  if (req.body['choice'] === 'yes') {
    res.redirect('court');
  } else {
    res.redirect('other');
  }
});

// Routes end

module.exports = router;
