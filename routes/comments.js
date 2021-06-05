
const router = require('express').Router();
const commsRepo = require('../repositories/comments')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  var usersList=res.send(await commsRepo.getAllComments())
});

router.get('/:id', async function(req, res, next) {
  res.send(await commsRepo.getComments(req.params.id));
});

router.post('/', async function(req, res, next) {
  let comms = {}
  comms.content = req.body.content
  comms.ArticleId = req.body.ArticleId
  await commsRepo.addComments(comms);
  res.redirect("/");
});

router.put('/', async function(req, res, next) {
  let article = {}
  comms.content = req.body.content
  comms.ArticleId = req.body.ArticleId
  res.send(await commsRepo.updateComments(comms));
});

router.delete('/', async function(req, res, next){
  let comms= req.body.id
  await commsRepo.deleteComments(comms);
  res.redirect("/");
})
module.exports = router;