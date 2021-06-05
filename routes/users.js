var User = require('../repositories/users')
var express = require('express');
var router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', async function(req, res){
	return res.send(await User.getAllUsers())
})

router.get('/:id', async function(req, res){
	res.send(await User.getUser(req.params.id))
})

router.post('/', async function(req, res){
	let user = {};
	user.username = req.body.username
	user.email = req.body.email
	user.password = req.body.password
	user.role = req.body.role
	user.createdAt = moment().format('YYYY/MM/DD h:mm:ss')
	user.updatedAt = user.createdAt
	res.send(await User.addUser(user));
})

router.put('/', async function(req, res){
	let user= {}
	user.username=req.body.username
	user.email=req.body.email
	user.role=req.body.role
	user.updatedAt=moment().format('YYYY/MM/DD h:mm:ss')
	res.send(await User.updateUser(user))
})

module.exports = router;
