const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../passport')


router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('/user called: ')
	console.log('===== user!!======');
	console.log(req.user)
	console.log('/user end');
	if (req.user) {
		res.json({ user: req.user })
	} else {
		res.json({ user: null })
	}
})

router.put('/user/player/add', (req, res) => {
	
	console.log("adding user log");
	console.log(req.body);
	const { username, qbId } = req.body;
	User.update({ username: username }, 
		{$push: {players: qbId}}
	)
	.then((response) => {
		console.log(response);
		res.send(response);
	})
	
});

router.put('/user/player/delete', (req, res) => {
	
	console.log("adding user log");
	console.log(req.body);
	const { username, qbId } = req.body;
	User.update({ username: username }, 
		{$pullAll: {players: [qbId]}}
	)
	.then((response) => {
		console.log(response);
		res.send(response);
	})
	
});

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		res.json({ msg: 'logging you out' })
	} else {
		res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { username, password } = req.body;
	req.session.username = req.body.username;
	//console.log('is this a username', req.body.username);
	// ADD VALIDATION
	User.findOne({ 
		username: username
	}, (err, userMatch) => {
		console.log(err);
		console.log(userMatch);


		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'username': username,
			'password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router
