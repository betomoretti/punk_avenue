const mongoose = require('mongoose')
const opts =  { useNewUrlParser: true }

module.exports.setUp = async () => {
  if (process.env.NODE_ENV !== 'test') {
    try {
      await mongoose.connect(`mongodb://localhost:27017/boilerplate`, opts)
      mongoose.connection.once('open', function() {
        console.log('Connected to db...')
      });
    } catch (error) {
      mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
      process.exit(1)
    }

  }
}

module.exports.setUpForTest = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/boilerplate`, opts)
    mongoose.connection.once('open', function() {
      console.log('Connected to db...')
    });
  } catch (error) {
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    process.exit(1)
  }
}
