const router = require('express').Router();
const tagRepo = require('../repositories/tags')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log("done")
  var usersList=res.send(await tagRepo.getAllTags())
});
router.get('/:id', async function(req, res, next) {
  res.send(await tagRepo.getTags(req.params.id));
});

router.post('/', async function(req, res, next) {
  let tag = {}
  tag.name = req.body.name
  await tagRepo.addTags(tag);
  res.redirect("/");
});

router.put('/', async function(req, res, next) {
  let tag = {}
  tag.name = req.body.name
  res.send(await tagRepo.updateTags(ustager));
});

router.delete('/', async function(req, res, next){
  let tag= req.body.id
  await tagRepo.deleteTags(tag);
  res.redirect("/");
})
module.exports = router;