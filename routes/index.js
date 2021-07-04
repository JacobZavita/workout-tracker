const router = require('express').Router()

router.use('/api', require('./exerciseRoutes'))
router.use('/api', require('./userRoutes'))

module.exports = router