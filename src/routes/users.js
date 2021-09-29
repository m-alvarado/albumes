const express = require('express')
const router = express.Router()

router.get('/users/login', (req, res) => {
    res.render('login.ejs')
})

router.get('/users/register', (req, res) => {
    res.render('register.ejs')
})

module.exports = router