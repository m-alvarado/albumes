const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/galley-db-app', {})
    .then(db => console.log('Conectado'))
    .catch(err => console.error(err))







