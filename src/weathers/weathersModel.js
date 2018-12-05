const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
  coord: {},
  main: {}
}, {
  timestamps: true
})

const Weather = mongoose.model('Weather', weatherSchema)


module.exports = Weather