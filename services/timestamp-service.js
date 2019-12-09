const parseDate = (dateString, callback) => {
  let date
  if (/^\d+$/.test(dateString)) {
    date = new Date(+dateString)
  } else {
    date = new Date(dateString)
  }
  
  if (!date) {
    const error = 'Invalid Date'
    callback(error)
    return
  }
  
  callback(null, date)
}

module.exports = { parseDate }
