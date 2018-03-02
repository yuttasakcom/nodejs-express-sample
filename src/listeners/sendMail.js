const emailService = require('../services/email')

const sendMail = socket => {
  socket.on('sendMail', data => {
    emailService.sendMail(data)
    console.log('send mail success')
  })
}

module.exports = sendMail
