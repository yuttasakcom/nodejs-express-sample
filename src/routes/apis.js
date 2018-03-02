const router = require('express').Router()

router.get('/', (req, res) => {
  res.end('Application Programming Interfaces')
})

module.exports = router
