const router = app => {
  app.get('/', (req, res) => {
    res.end('Hello')
  })
}

module.exports = router
