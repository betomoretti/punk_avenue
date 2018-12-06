const schedule = require('node-schedule')
const { setUp } = require('../config/db')
const stationSync = require('./stationsSync')
const weatherSync = require('./weathersSync')

console.info('Scheduling job')

// running schedule every 30min
setUp()
  .then(() => {
    const j = schedule.scheduleJob('*/1800 * * * * *', async () => {
      await stationSync()
      await weatherSync()
    });
})
