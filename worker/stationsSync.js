const util = require('util');
const request = require('request')
const promisifyedRequest = util.promisify(request)
const stationModel = require('../src/stations/stationsModel')

module.exports = async () => {
  try {
    const { statusCode, body } = await promisifyedRequest('https://www.rideindego.com/stations/json/')
    if (statusCode === 200) {
      const { features } = JSON.parse(body)
      await stationModel.insertMany(features)
    }
    console.log('Done stations')
  } catch (e) {
    console.error(e)
    process.exit(2)
  }
}