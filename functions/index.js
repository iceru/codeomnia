const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'SendinBlue',
  auth: {
    user: 'contact@hellorasa.com',
    pass: 'TYEWKvXUS5m13fMV'
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: 'CodeOmnia <contact@hellorasa.com>',
    to: 'contact@hellorasa.com',
    subject: 'CodeOmnia Contact Form Submission',
    html: `${message} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString());
    }
    response.send('Your message was submitted successfully')
  })
})
