import express from 'express'

const app = express()

//Server config
app.set('views', './views')
//Declaramos que prepro de html vamos a usar
app.set('view engine', 'ejs')
//Declaramos donde va a estar las hojas de estilo
app.use(express.static('./styles'))
//Utilizamos el urlenconded para poder enviar los parametros por el metodo POST encriptados
app.use(express.urlencoded({extended: true}))

//Starting the server
app.listen('8000', (req, res) => {
    console.log("App iniciada en: 'https://localhost:8000'")
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})