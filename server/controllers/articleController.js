const Article = require('../models/Articles')

class ArticleController {
  static findAll (req, res) {
    Article.find()
      .then(articles => {
        res.status(200).json({
          message: 'all articles',
          articles: articles
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  static create(req, res) {
    let article = new Article({
      author : req.decoded.id,
      title: req.body.title,
      content: req.body.content,
      image: req.file.cloudStoragePublicUrl,
      category: req.body.category
    })

    article.save()
    .then( postArticle => {
      res.status(200).json({
        message: 'successfully add new article',
        article: postArticle
      })
    })
    .catch( err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = ArticleController