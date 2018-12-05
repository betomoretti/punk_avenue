module.exports.getValidator = ({at}) => {
  if (!at) {
    return Error('You must send an at query param')
  }

  return false
}

module.exports.getByKioskIdValidator = ({id, at, from, to, frequency}) => {
  if (!id) {
    return Error('You must specify an id')
  }

  if (!/^\d+$/.test(Number(id))) {
    return Error('You must specify a valid id')
  }

  if (!Date.parse(at) && !Date.parse(from) && !Date.parse(to)) {
    return Error('You must send a valid UTC date. At least one of these params must be sended: at or from and to')
  }

  if (frequency && !/(daily|hourly)/.test(frequency)) {
    return Error('You can only send hourly or daily for the frequency param')
  }

  return false
}