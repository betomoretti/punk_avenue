const moment = require('moment')

const formatters = {
  hourly: (stations) => {

  },
  daily: (stations) => {
    const [first] = stations
    const elems = stations.reduce((accu, current) => {
      const last = accu[accu.length - 1]
      const lastDate = last.createdAt
      const currentDate = current.createdAt
      if (lastDate.getDate() !== currentDate.getDate()) {
        accu.push(current)
      }
      return accu
    }, [first])

    return elems
  }
}

const formatStations = ({ station, params: { from, to, frequency = 'hourly' } }) => {
  if (!from || !to) {
    return station
  }

  return formatters[frequency](station)
}

const queryBuilder = ({ id, at, from, to, frequency }) => {
  const query = {
    'properties.kioskId': Number(id)
  }

  if (at) {
    return { ...query, createdAt: { $gte: at } }
  }

  return {
    ...query,
    createdAt: { $gte: from, $lte: to }
  }
}

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

  async getByKioskId(params) {
    const query = queryBuilder(params)
    const station = await this.model.find(query)
    const formatedStations = formatStations({ station, params })
    const weather = await this.weatherService.getByAt(params.at)
    return { station: formatedStations, weather }
  }
}