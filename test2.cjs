const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const mapInit = code.match(/let map.*?function initMap/s);
if (mapInit) console.log(mapInit[0]);
