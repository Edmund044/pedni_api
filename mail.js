var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'edmundopiyo@gmail.com',
    pass: 'ehmcevmbqwryapyh'
  }
});

var mailOptions = {
  from: 'edmundopiyo@gmail.com',
  to: 'skobdelva@gmail.com',
  subject: 'Sending Email using Node.js Trial 1',
  html: '<h1>Just trying out the Node.js email functionality.</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 