const router = require('express').Router()
const StationService = require('./stationsService')
const model = require('./stationsModel')
const { getValidator, getByKioskIdValidator } = require('./stationsValidator')
const { service: weatherService } = require('../weathers')
const service = new StationService({ model, weatherService })
const { getByKioskId, get } = require('./stationsController')

router.get('/stations', get({ service, validate: getValidator }))
router.get('/stations/:id', getByKioskId({ service, validate: getByKioskIdValidator }))

module.exports = router