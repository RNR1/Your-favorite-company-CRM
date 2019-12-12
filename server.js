const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', api)

const PORT = process.env.PORT || 8020
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))