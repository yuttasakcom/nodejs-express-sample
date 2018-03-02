const apis = require('./apis')

const router = app => {
  app.use('/apis', apis)
}

module.exports = router
