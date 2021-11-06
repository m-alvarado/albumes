const express = require('express')
const session = require('express-session')
const passport = require('passport')
const path = require('path')

const app = express()
const port = 3000
require('./db')
global.sesion = false

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))

app.use(express.urlencoded({extended: false}))

const users = require('./routes/user_forms')
app.use(users)


app.listen(port, (req, res) => {
    console.log(`Server running at localhost:${port}`)
})


