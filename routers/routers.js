const router = require('koa-router')()
const index = require('./index')
const about = require('./about')
const api = require('./api')

router.use('/', index.routes(), index.allowedMethods())
router.use('/about', about.routes(), about.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router