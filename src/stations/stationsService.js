module.exports = class StationService {
  constructor({model}) {
    this.model = model
  }

  async get({ at }) {
    const result = await this.model.find({ createdAt: { $gte: at } })
    return result
  }

  async getByKioskId({id, at, from, to}) {
    const query = {
      'properties.kioskId': Number(id),
      createdAt: { $gte: at }
    }
    const result = await this.model.find(query)
    return result
  }
}