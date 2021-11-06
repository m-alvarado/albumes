const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/Users')


router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    if (!username || !email || !password) {
        console.log('No ingresó los datos') 
        res.redirect('/register')
    }else{
        console.log('Bien')
        const newUser = new User({username:username, email:email, password:password})
        console.log('Usuario creado')
        newUser.password = await newUser.encryptPassword(password)
        console.log('Password encrypted')
        await newUser.save()
        console.log("Usuario registrado")
        res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

module.exports = router