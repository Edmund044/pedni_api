var geofire = require('geofire')
var firebase = require('firebase');
var firebaseRef = firebase.database().ref();
// Create a GeoFire index
var ref = new GeoFire(firebaseRef);
var geoQuery = geoFire.query({
    center: [10.38, 2.41],
    radius: 10.5
  });