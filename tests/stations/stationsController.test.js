const { app } = require('../../src/app')
const request = require('supertest')
const moment = require('moment')
const model = require('../../src/stations/stationsModel')

describe('Stations controller', () => {
  test('GET /stations?at=date should return 200', async () => {
    const { status, body: { station } } = await request(app).get('/api/v1/stations?at=2018-12-05T10:00:00')
    expect(status).toBe(200)
    expect(station.length).toBeGreaterThan(0)
  })

  test('GET /stations should return 400', async () => {
    const { status } = await request(app).get('/api/v1/stations')
    expect(status).toBe(400)
  })

  test('GET /stations/asd?at=date should return 400', async () => {
    const { status } = await request(app).get('/api/v1/stations/asda')
    expect(status).toBe(400)
  })

  test('GET /stations/:kioskId?at=date should return 400', async () => {
    const {properties: { kioskId }} = await model.findOne({})
    const { status, body: { station } } = await request(app).get(`/api/v1/stations/${kioskId}?at=2018-12-05T10:00:00`)
    expect(status).toBe(200)
    expect(station.length).toBeGreaterThan(0)
  })

  test('GET /stations/:kioskId?from=date&to=date should return 400', async () => {
    const { properties: { kioskId }, createdAt: from } = await model.findOne({})
    const to = moment(from).add(2, 'days')
    const { status, body: { station } } = await request(app).get(`/api/v1/stations/${kioskId}?from=${from}&to=${to}`)
    expect(status).toBe(200)
    expect(station.length).toBeGreaterThan(0)
  })

  afterAll(async () => await model.deleteMany({}));
})

