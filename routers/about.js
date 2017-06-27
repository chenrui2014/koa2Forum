const router = require('koa-router')()
module.exports = router
    .get('/', async ctx => {
      ctx.body = 'about page'
    })
    .get('/user', async ctx => {
      ctx.body = 'user page'
    })
