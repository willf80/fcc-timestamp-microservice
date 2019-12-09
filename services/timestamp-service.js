const parseDate = (dateString, callback) => {
  if (!dateString) {
    return callback(null, new Date())
  }

  let date
  if (/^\d+$/.test(dateString)) {
    date = new Date(+dateString)
  } else {
    date = new Date(dateString)
  }

  if (date.toString() === 'Invalid Date') {
    const error = { error: 'Invalid Date' }
    return callback(error)
  }

  callback(null, date)
}

module.exports = { parseDate }
