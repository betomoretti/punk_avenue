module.exports.get = ({ service, validate }) => async ({query: { at }}, res) => {
  const error = validate({at})
  if (error) {
    return res.status(400).send(error.message)
  }

  const { station, weather } = await service.get({ at })
  if (station.length === 0) {
    return res.status(404).send({})
  }
  const [ first ] = station
  res.status(200).send({at: first.createdAt, station, weather})
}

module.exports.getByKioskId = ({ service, validate }) => async ({params: { id }, query: { at, from, to, frequency }}, res) => {
  const params = { id, at, from, to, frequency }
  const error = validate(params)
  if (error) {
    return res.status(400).send(error.message)
  }

  const { station, weather } = await service.getByKioskId(params)
  if (station.length === 0) {
    return res.status(404).send({})
  }
  const [ first ] = station
  res.status(200).send({at: first.createdAt, station, weather})
}