const router = require('express').Router();
const commsRepo = require('../repositories/comments')
const articleRepo = require('../repositories/articles')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await articleRepo.getArticles())
});

router.get('/count', async function(req, res, next) {
  res.sendStatus(await articleRepo.countarticle());
});

router.get('/countComm', async function(req, res, next) {
  res.send(await commsRepo.countComments());
});

router.get('/:id', async function(req, res, next) {
  res.send(await articleRepo.getArticlesById(req.params.id));
});

router.get('/:id/comments', async function(req, res, next) {
  res.send(await commsRepo.getArticleComments(req.params.id));
});

router.post('/', async function(req, res, next) {
  let article = {}
  article.title = req.body.title
  article.content = req.body.content
  article.UserId = req.body.UserId
  await articleRepo.addArticle(article);
  res.redirect("/");
});

router.put('/', async function(req, res, next) {
  let article = {}
  article.title = req.body.title
  article.content = req.body.content
  article.UserId = req.body.UserId
  res.send(await articleRepo.updateArticle(user));
});

router.delete('/', async function(req, res, next){
  let article= req.body.id
  await articleRepo.deleteArticle(article);
  res.redirect("/");
})
module.exports = router;