// import package
const Mpesa = require("mpesa-api").Mpesa;
const credentials = {
    clientKey: 'cja4szDq7aAus74taaSE8wDKM8wpg0Mo',
    clientSecret: 'VQHQc9M9TqmMnB2M',
    initiatorPassword: 'YOUR_INITIATOR_PASSWORD_HERE',
    securityCredential: 'YOUR_SECURITY_CREDENTIAL',
    certificatePath: 'keys/example.cert'
};
const environment = "sandbox";
// create a new instance of the api
const mpesa = new Mpesa(credentials, environment);
mpesa
  .lipaNaMpesaOnline({
    BusinessShortCode: 123456,
    Amount: 1000 /* 1000 is an example amount */,
    PartyA: "Party A",
    PhoneNumber: "0701376319",
    CallBackURL: "CallBack URL",
    AccountReference: "Account Reference",
    passKey: "Lipa Na Mpesa Pass Key",
    TransactionType: "Transaction Type" /* OPTIONAL */,
    TransactionDesc: "Transaction Description" /* OPTIONAL */,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });