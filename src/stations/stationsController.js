module.exports.get = ({ service }) => async (req, res) => {
  const data = await service.get({ at: req.query.at })
  res.status(200).send({at: req.query.at, stations: data})
}

module.exports.getByKioskId = ({ service }) => async (req, res) => {
  const params = { id: req.params.id, at: req.query.at, from: req.query.from, to: req.query.to }
  const data = await service.getByKioskId(params)
  res.status(200).send({at: req.query.at, stations: data})
}