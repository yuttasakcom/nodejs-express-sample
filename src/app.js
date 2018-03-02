const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

app.use(morgan('tiny'))

const routes = require('./routes')
routes(app)

module.exports = app
