const axios = require('axios').default;
require('dotenv').config();
 //getting the timestamp
 let timestamp = require('./timestamp/timestamp').timestamp;

 let url = process.env.lipa_na_mpesa_url;
 let bs_short_code = process.env.lipa_na_mpesa_shortcode;
 let passkey = process.env.lipa_na_mpesa_passkey;

 let password = new Buffer.from(`${bs_short_code}${passkey}${timestamp}`).toString('base64');
 let transcation_type = "CustomerPayBillOnline";
 let amount = "1"; //you can enter any amount
 let partyA = "254701376319"; //should follow the format:2547xxxxxxxx
 let partyB = process.env.lipa_na_mpesa_shortcode;
 let phoneNumber = process.env.phone;//"254725209942"; //should follow the format:2547xxxxxxxx
 let callBackUrl = "https://quick-garage-api.herokuapp.com/mpesa/lipa-na-mpesa-callback";
 let accountReference = "INEX TENDER DOTE";
 let transaction_desc = "Payment for successful match with the closest mechanic.";
let {data2} =  axios.post("https://quick-garage-api.herokuapp.com/customerOrders/orders",{
                "BusinessShortCode":bs_short_code,
                "Password":password,
                "Timestamp":timestamp,
                "TransactionType":transcation_type,
                "Amount":amount,
                "PartyA":partyA,
                "PartyB":partyB,
                "PhoneNumber":phoneNumber,
                "CallBackURL":callBackUrl,
                "AccountReference":accountReference,
                "TransactionDesc":transaction_desc
            }).catch(console.log);

