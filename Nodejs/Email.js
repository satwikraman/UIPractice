var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vivekwhitebox@gmail.com',
    pass: 'qwertyuiop@1'
  }
});

var mailOptions = {
  from: 'vivekwhitebox@gmail.com',
  to: 'vivek@whitebox-learning.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});