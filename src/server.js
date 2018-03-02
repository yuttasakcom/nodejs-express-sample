const http = require('http')
const app = require('./app')

const server = http.createServer(app)

const socketIO = require('./libs/socketIO')
socketIO(server)

server.listen(app.get('port'), app.get('host'), err => {
  if (err) return err

  console.log(
    `Server is running on http://${app.get('host')}:${app.get('port')}`
  )
})
