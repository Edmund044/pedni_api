const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyB1vu0yAHISd_gE4XViUfYPwlYyb0uO9UE",
  authDomain: "quick-garage-521f8.firebaseapp.com",
  databaseURL: "https://quick-garage-521f8-default-rtdb.firebaseio.com",
  projectId: "quick-garage-521f8",
  storageBucket: "quick-garage-521f8.appspot.com",
  messagingSenderId: "213686863596",
  appId: "1:213686863596:web:79e85fb2e75371fe6a47c9",
  measurementId: "G-2P2XPFDMV1"

  };
  firebase.initializeApp(firebaseConfig);  
  
  module.exports = firebase;