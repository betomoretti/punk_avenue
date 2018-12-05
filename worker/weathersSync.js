const util = require('util');
const request = require('request')
const promisifyedRequest = util.promisify(request)
const weatherModel = require('../src/weathers/weathersModel')

module.exports = async () => {
  try {
    const { body } = await promisifyedRequest('http://api.openweathermap.org/data/2.5/weather?q=Philadelphia,us&APPID=df8c6a7af27e9beaa776b8a9603ff143')
    const { cod, coord, main } = JSON.parse(body)
    if (cod == "200") {
      await weatherModel.create({ coord, main })
    }
    console.log('Done weathers')
  } catch (e) {
    console.error(e)
    process.exit(2)
  }
}