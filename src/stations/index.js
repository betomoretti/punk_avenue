const router = require('express').Router()
const StationService = require('./stationsService')
const model = require('./stationsModel')
const service = new StationService({ model })
const { getByKioskId, get } = require('./stationsController')

router.get('/stations', get({ service }))
router.get('/stations/:id', getByKioskId({ service }))

module.exports = router