const fs = require('fs');
const code = fs.readFileSync('index.html', 'utf8');

const thumbs = code.match(/const galleryThumbnails = document.getElementById\('gallery-thumbnails'\);[\s\S]*?(?=if \(currentView === 'icons'\))/);
if (thumbs) console.log(thumbs[0]);
