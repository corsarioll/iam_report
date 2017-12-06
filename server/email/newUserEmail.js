var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jeissonlazo@gmail.com',
    pass: 'corsario123'
  }
});

var invitation = function(data){
	var mailOptions = {
		subject: 'Invitation report plataform',
		text: 'That was easy 2!',		
		from: data.from,
		to: data.to,
		html:'<a href="http://localhost:8080/login/' + data.projectKey + '"> sign up </a>'
	};
	
	
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	
}

module.exports = invitation	

