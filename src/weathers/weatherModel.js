const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
  list: []
}, {
  timestamps: true
})

const Weather = mongoose.model('Weather', weatherSchema)


module.exports = Weather