const model = require('./weathersModel')
const WeatherService = new require('./weathersService')
const service = new WeatherService({model})

module.exports.service = service