const util = require('util');
const request = require('request')
const promisifyedRequest = util.promisify(request)
const weatherModel = require('../src/weathers/weathersModel')

module.exports = async () => {
  try {
    const { body } = await promisifyedRequest('api.openweathermap.org/data/2.5/forecast?name=Philadelphia&APPID=df8c6a7af27e9beaa776b8a9603ff143')
    const { cod, list } = JSON.parse(body)
    if (cod == "200") {
      await weatherModel.create({ list })

    }
    console.log('Done weathers')
  } catch (e) {
    console.error(e)
    process.exit(2)
  }
}