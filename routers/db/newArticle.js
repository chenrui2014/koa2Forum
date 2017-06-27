const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Articles')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.on('open', () => {
  console.log('成功连接数据库...')
})

const ArticleSchema = new mongoose.Schema({
  name: String,
  date: String,
  url: String,
  content: String
})
const ArticleModel = db.model('Articles', ArticleSchema)

module.exports = ArticleModel