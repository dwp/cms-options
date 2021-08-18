const express = require('express')
const router = express.Router()


router.get('/paying-receiving', (req, res) => {
    res.render('v6/paying-receiving')
})

router.post('/paying-receiving', (req, res) => {
    let payingReceiving = req.session.data['paying-receiving']
    if (payingReceiving === "paying") {
        res.redirect('receiving-parents-name')
    }
    else {
        res.redirect('paying-parents-name')
    }
})


router.get('/do-you-receive-benefits-r', (req, res) => {
    res.render('v6/benefits-q-r')
})

router.post('/do-you-receive-benefits-r', (req, res) => {
    let receiveBenefits2 = req.session.data['do-you-receive-benefits-r']
    if (receiveBenefits2 === "yes") {
        res.redirect('benefits-r')
    }
    else {
        res.redirect('wages-r')
    }
})


router.get('/do-you-receive-benefits-p', (req, res) => {
    res.render('v6/benefits-q-p')
})

router.post('/do-you-receive-benefits-p', (req, res) => {
    let receiveBenefits = req.session.data['do-you-receive-benefits-p']
    if (receiveBenefits === "yes") {
        res.redirect('benefits-p')
    }
    else {
        res.redirect('wages-p')
    }
})









module.exports = router
