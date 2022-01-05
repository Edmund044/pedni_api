const express = require('express');
const app = express();
var nodemailer = require('nodemailer');
require('dotenv').config();
const admin = require('../../../../firebase/database');
const db = admin.firestore();


app.post("/email",async (req,res,next) =>{
    const data = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'edmundopiyo@gmail.com',
          pass: 'ehmcevmbqwryapyh'
        }
      });
      
      var mailOptions = {
        from: 'edmundopiyo@gmail.com',
        to: req.body.data.recipient,
        subject: req.body.data.subject,
        text: req.body.data.text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

});
module.exports = app;