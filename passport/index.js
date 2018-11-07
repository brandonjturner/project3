const passport = require('passport')
const LocalStrategy = require('./localStrategy')
//const GoogleStratgey = require('./googleStrategy')
const User = require('../db/models/user')

passport.serializeUser((user, done) => {
	console.log('===== SERIALIZE USER CALLED ======')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	console.log('===== DESERIALIZE USER CALLED ======')
	User.findOne(
		{ _id: id },
		'firstName lastName photos username',
		(err, user) => {
			console.log('======= DESERILIAZE FINDING USER ======')
			console.log(user)
			console.log('======= END DESERIALIZE =======')
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
//passport.use(GoogleStratgey)

module.exports = passport
