const express = require('express')
const { default: mongoose } = require('mongoose')
const tourRouter = require('./Routers/tour.router')
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
//mongoose connection
mongoose.connect(`mongodb+srv://marufmobin:T1Avad8hCvhGkSdF@cluster0.wkvs6av.mongodb.net/?retryWrites=true&w=majority`, (err) => console.log('Database is connected'))

//routes
app.use('/tours', tourRouter)
app.use('/', (req, res) => res.send("home"))

app.listen(port, (res) => console.log(port + ' is running'))
