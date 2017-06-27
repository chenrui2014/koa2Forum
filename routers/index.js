const router = require('koa-router')()
const ArticleModel = require('./db/newArticle')

module.exports = router
    .get('/', async ctx => {
      let articles = await ArticleModel.find({})
      await ctx.render('index', {
        articles
      })
    })
   
