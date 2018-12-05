const { setUpForTest } = require('../config/db')

setUpForTest().then(()=> console.log('test setup done'))
