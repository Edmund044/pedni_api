const prettyjson = require('prettyjson');
const express = require('express');
const app = express();
const options = {
    keysColor: 'rainbow',
    dashColor: 'magenta',
    stringColor: 'white'
  };
// create our webhook endpoint to recive webhooks from Safaricom
app.get('/mpesa', (req, res) => {
    console.log('-----------Received M-Pesa webhook-----------');
      
    // format and dump the request payload recieved from safaricom in the terminal
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
      
    let message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
      };
      
    // respond to safaricom servers with a success message
    res.json(message);
  });
  module.exports = app;