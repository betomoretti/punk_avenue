const mongoose = require('mongoose')

const stationSchema = new mongoose.Schema({
    "geometry": Object,
    "properties": Object
  }, {
  timestamps: true
})

const Station = mongoose.model('Station', stationSchema)


module.exports = Station