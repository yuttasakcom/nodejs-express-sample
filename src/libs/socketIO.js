const socketIO = require('socket.io')
const events = require('../events')

const socket = server => {
  const io = socketIO(server)

  io.on('connection', socket => {
    console.log('New user connect')

    events(socket)

    socket.on('disconnect', () => {
      console.log('User disconnected')
    })
  })
}

module.exports = socket
