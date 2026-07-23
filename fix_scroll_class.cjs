const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldPopStart = `        function populateContent() {
            let galleryScrollLeft = 0;
            const filmstripContainer = document.querySelector('.gallery-filmstrip-container');`;
const newPopStart = `        function populateContent() {
            let galleryScrollLeft = 0;
            const filmstripContainer = document.querySelector('.gallery-thumbnails');`;
html = html.replace(oldPopStart, newPopStart);

const oldPopEnd = `                // Immediately restore scroll state synchronously
                const newFilmstripContainer = document.querySelector('.gallery-filmstrip-container');`;
const newPopEnd = `                // Immediately restore scroll state synchronously
                const newFilmstripContainer = document.querySelector('.gallery-thumbnails');`;
html = html.replace(oldPopEnd, newPopEnd);

fs.writeFileSync('index.html', html);
console.log('Fixed scroll restoration class');
