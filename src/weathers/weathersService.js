module.exports = class WeatherService {
  constructor({ model }) {
    this.model = model
  }

  async getByAt(at) {
    return await this.model.find({ createdAt: { $gte: at } })
  }
}