const router = require('express').Router()
const passport = require('passport')
const email = require('../email/newUserEmail')
const keys = require('../config/keys')

// auth Login 

router.get('/login',(req,res)=>{
	res.send('login')
})

// auth logout 

router.get('/logout',(req,res)=>{
	//Handle with passport 
	req.logout()
	res.redirect(keys.frontEndUrl)
})

// auth with google
router.get('/google', passport.authenticate('google', { 
	scope: ['profile','https://www.googleapis.com/auth/userinfo.email'] 
}));

//invitation email 
router.post('/invitation',function(req, res, next){
	
	var emailData = {
		from: 'jeissonlazo@gmail.com',
		to: req.body.email,
		projectKey:keys.encodingKey
	}
	email(emailData)
	res.send(req.body)
});

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	//res.send('you reached the redirect URI'+req.user);
	console.log(req.user)
	if(!req.user){
		res.redirect(keys.frontEndUrl)
	}else{
		res.redirect(keys.frontEndUrl + '?id=' + req.user._id)
	}
});

module.exports = router