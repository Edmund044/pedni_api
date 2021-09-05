const geolib = require('geolib');
const current = { latitude: -1.28, longitude: 36.8 };
const array = [
    { longitude: 36.8155, latitude: -1.2841 },
    { longitude: 37.2, latitude: 2.3 },
    { longitude: 35.9, latitude: 1.89 },
    { latitude: -1.9, longitude: 34.9 },
    { longitude: 39.39, latitude: -1.903 },
    { longitude: 35.98, latitude: -1.7 }
  ];
console.log(geolib.findNearest(current,array));