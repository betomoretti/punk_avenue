module.exports = class StationService {
  constructor({ model, weatherService }) {
    this.model = model
    this.weatherService = weatherService
  }

  async get({ at }) {
    const station = await this.model.find({ createdAt: { $gte: at } })
    const weather = await this.weatherService.getByAt(at)
    return { station, weather }
  }

  async getByKioskId({id, at, from, to}) {
    const query = {
      'properties.kioskId': Number(id),
      createdAt: { $gte: at }
    }
    const station = await this.model.find(query)
    const weather = await this.weatherService.getByAt(at)
    return { station, weather }
  }
}