const request = require('supertest')
const mongoose = require('mongoose')
const { app } = require('../src/app')
let model;

describe('Test app setup', () => {

  beforeAll(() => {
    const testSchema = new mongoose.Schema({
      name: String
    }, {
      timestamps: true
    })

    model = mongoose.model('Test', testSchema)
  })

  test('GET / should return status 200', async () => {
    await model.create({name: "test"})
    const count = await model.countDocuments()
    expect(count).toBe(1)
  })

  test('GET / should return status 200', async () => {
    const { status } = await request(app).get('/health')
    expect(status).toBe(200)
  })

  afterEach(async () => {
    await model.deleteMany({})
  })
})