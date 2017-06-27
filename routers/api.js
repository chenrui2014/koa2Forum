const router = require('koa-router')()
module.exports = router
    .get('/', async ctx => {
      ctx.body = {
        foo: 'bar',
        user:[
          {
            name:'u1'
          },
          {
            name:'u2'
          }
        ]
      }
    })
