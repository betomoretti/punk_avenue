const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const { setUp } = require('../config/db')
const { asyncMiddleware } = require('../utils/helpers')
const stationsRouter = require('./stations')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', stationsRouter)

app.get('/health', asyncMiddleware(async (req, res, next) => {
  next()
}), (req, res) => {
  res.status(200).send({"status": "running.."})
})

module.exports.app = app

module.exports.connectDB = setUp
