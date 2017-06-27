const Koa = require('koa')
const app = new Koa()
const router = require('./routers/routers')
/*设置view*/
const views = require('koa-views')
const path = require('path')
/*静态资源目录*/
const static = require('koa-static')


/*可直接访问:http://localhost:3001/style/index.css*/
app.use(static(path.join(__dirname, './static')))
/*模板引擎*/
app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}))
// log
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
/*设置路由*/
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('listing on 3000')