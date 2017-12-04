const router = require('express').Router()
const passport = require('passport')
const bodyParser = require('body-parser')
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

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/auth/google/callback', bodyParser.json(), (req, res) => {
	console.log("test")
	res.send('you reached the redirect URI');	
});

/*
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    //res.redirect('/');
		res.send('you reached the redirect URI');	
  });
*/

module.exports = router