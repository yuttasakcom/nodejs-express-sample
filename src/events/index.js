const sendMail = require('../listeners/sendMail')

const events = socket => {
  sendMail(socket)
}

module.exports = events
