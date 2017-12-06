const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const userSchema = require('../schemas/user')
const mongoose = require('mongoose')

const User = mongoose.model('user', userSchema)

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:8080/home'
    }, (accessToken, refreshToken, profile,email, done) => {
				
				var userData = {
					firstName:email.name.givenName,
					LastName:email.name.familyName,
					userName:email.displayName,
					email:email.emails[0].value,
					googleId:email.id,
					image:email.photos[0].value,
					active:true,
				}
				console.log('inside')
				User.findOne({email:email.emails[0].value},function(err, user){
					// check if user already exists in our own db
					if(user.googleId){
						
					}else{
						User.findOneAndUpdate({email:email.emails[0].value},userData,function (err, user) {
							console.log("standar")
							if(err){
								console.log(err)
							}else{
								console.log(user)
							}
						});
					}
				})
				
			
    })
);