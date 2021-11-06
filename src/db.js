const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-albumnes-app', {useUnifiedTopology: true ,useNewUrlParser: true})
    .then(console.log('Conectado'))
    .catch(err => {console.log(err)})