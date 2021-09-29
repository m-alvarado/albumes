const express = require('express')
const methodsOverride = require('method-override')
const session = require('express-session')
const path = require('path')

//Inicializaciones
const app = express()
require('./database')



//Settings (Configuracion del servidor)
app.set('port', process.env.PORT || 3000) //Puerto
app.set('views', path.join(__dirname, 'views')) //Vistas
app.set('view engine', 'ejs')//Motor de vistas

//Middleware (Funciones que se realizan una vez que el sv las recibe y antes de distribuirlas por las rutas)
app.use(express.urlencoded({extended: false}))
app.use(methodsOverride('_method'))
app.use(session({
    secret:'aplicacion_secreta',
    resave: true,
    saveUninitialized: true
}))

// Global variables

//Rutas
app.use(require('./routes/index'))
app.use(require('./routes/users'))
app.use(require('./routes/gallery'))

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))) //Archivos estáticos (estilos/imágenes)

//Server listening
app.listen(app.get('port'), () => {
    console.log(`App iniciada en localhost:${app.get('port')}`)
})

