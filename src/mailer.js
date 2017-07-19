const nodemailer = require('nodemailer');
const config = require('../config');

// create reusable transporter object using the default SMTP transport
const mailer = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: config.mail_user,
    pass: config.mail_password
  }
});

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message %s sent: %s', info.messageId, info.response);
// });

module.exports = mailer;