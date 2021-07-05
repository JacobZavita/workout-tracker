const router = require('express').Router()

router.use('/api', require('./exerciseRoutes'))
router.use(require('./htmlRoutes'))

module.exports = router