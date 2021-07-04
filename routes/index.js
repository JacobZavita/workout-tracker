const router = require('express').Router()

router.use('/api', require('./exerciseRoutes'))

module.exports = router