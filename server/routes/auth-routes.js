const router = require('express').Router()
const passport = require('passport')
const bodyParser = require('body-parser')
const email = require('../email/newUserEmail')
const keys = require('../config/keys')
// auth Login 

router.get('/login',(req,res)=>{
	console.log("inside of login ")
	res.send('login')
})

// auth logout 

router.get('/logout',(req,res)=>{
	//Handle with passport 
	res.send('logging out')
})

// auth with google
router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

//invitation email 
router.post('/invitation',function(req, res, next){
	
	var emailData = {
		from: 'jeissonlazo@gmail.com',
		to: 'jeissonlazo@hotmail.com',
		projectKey:keys.encodingKey
	}
	email(emailData)
	res.send(req.body)
});

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/callback', bodyParser.json(), (req, res) => {
	res.send('you reached the redirect URI');	
});

module.exports = router