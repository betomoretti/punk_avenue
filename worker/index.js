const schedule = require('node-schedule')
const { setUp } = require('../config/db')
const stationSync = require('./stationsSync')
const weatherSync = require('./weathersSync')

// run job every 20 seconds for testing purposes

console.info('Scheduling job')

setUp()
  .then(() => {
    const j = schedule.scheduleJob('* * */1 * * *', async () => {
      await stationSync()
      await weatherSync()
    });
})
