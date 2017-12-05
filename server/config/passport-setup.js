const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const userSchema = require('../schemas/user')
const mongoose = require('mongoose')

const User = mongoose.model('user', userSchema)

passport.use(
    
	new GoogleStrategy({
		// options for google strategy
		callbackURL:'http://localhost:4000/auth/google/callback',
		clientID:keys.google.clientID,
		clientSecret:keys.google.clientSecret,
		passReqToCallback   : true
	},(accessToken, refreshToken, profile, done) => {
				
			// passport callback function
			//verificate there is no existing user
			User.findOne({googleId:profile.id}).then((currentUser)=>{
				if(currentUser){
					//alredy have the user
				}else{
					//if no, crete a new user
					new User({
						firstName:profile.name.givenName,
						LastName:profile.name.familyName,
						userName:profile.displayName,
						googleId:profile.id,
						image:profile.image.url,
						active:true
					}).save().then((newUser)=>{
						console.log('new user created'+ newUser)
					})
				}
 			})
			
    })
);