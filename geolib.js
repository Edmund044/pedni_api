const geolib = require('geolib');
console.log(dist = geolib.getPreciseDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: 51.31, longitude: 7.28 }
));
console.log(dist);
console.log(geolib.convertDistance(dist, 'km'));
time = geolib.convertDistance(dist, 'km')/80*(60);
console.log(time);