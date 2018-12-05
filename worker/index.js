const schedule = require('node-schedule')
const { setUp } = require('../config/db')
const stationSync = require('./stationsSync')
const weatherSync = require('./weathersSync')

// run job every 20 seconds for testing purposes

setUp()
  .then(() => {
    const j = schedule.scheduleJob('*/5 * * * * *', async () => {
      await stationSync()
      await weatherSync()
    });
})
