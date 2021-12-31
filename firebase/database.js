const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyAS79FOv8pOJ_iQ7cpLuQgKcXWJk2-yd2A",
  authDomain: "pedni-honey.firebaseapp.com",
  projectId: "pedni-honey",
  storageBucket: "pedni-honey.appspot.com",
  messagingSenderId: "951536253617",
  appId: "1:951536253617:web:0edbbda521bea1fec14090",
  measurementId: "G-C93WEWJ7G9"
  };
  firebase.initializeApp(firebaseConfig);  
  module.exports = firebase;