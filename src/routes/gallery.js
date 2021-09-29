const express = require('express')
const router = express.Router()

router.get('/gallery/nombre-gal', (req, res) => {
    res.render('home.ejs')
})

module.exports = router