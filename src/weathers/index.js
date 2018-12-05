const model = require('./weathersModel')
const WeatherService = require('./weathersService')
const service = new WeatherService({model})

module.exports.service = service