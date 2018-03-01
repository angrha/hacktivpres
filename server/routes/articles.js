const express = require('express');
const router  = express.Router();
const Article = require('../controllers/articleController')
const Image = require('../helper/image')
const isLogin = require('../helper/authentication')

router.get('/', Article.findAll)
router.post('/', isLogin, Image.multer.single('image'), Image.sendUploadToGCS, Article.create)

module.exports = router