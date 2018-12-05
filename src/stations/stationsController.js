module.exports.get = ({ service, validate }) => async ({query: { at }}, res) => {
  const error = validate({at})
  if (error) {
    return res.status(400).send(error.message)
  }

  const { stations, weather } = await service.get({ at })
  res.status(200).send({at: at, stations, weather})
}

module.exports.getByKioskId = ({ service, validate }) => async ({params: { id }, query: { at, from, to }}, res) => {
  const params = { id, at, from, to }
  const error = validate(params)
  if (error) {
    return res.status(400).send(error.message)
  }
  const data = await service.getByKioskId(params)
  res.status(200).send({at, stations: data})
}