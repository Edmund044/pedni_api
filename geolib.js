const geolib = require('geolib');
console.log(geolib.getCenter([
    { latitude: 52.516272, longitude: 13.377722 },
    { latitude: 51.515, longitude: 7.453619 },
    { latitude: 51.503333, longitude: -0.119722 },
]));
