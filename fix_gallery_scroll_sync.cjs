const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// First, fix the keydown handlers back to populateContent
const keydownOld = `                    selectedFile = files[newIndex];
                    updateGalleryDOM(newIndex);
                    scrollItemIntoView(newIndex);`;
const keydownNew = `                    selectedFile = files[newIndex];
                    populateContent();
                    scrollItemIntoView(newIndex);`;
html = html.replace(new RegExp(keydownOld.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), keydownNew);

// Now wrap populateContent with scroll state saving
const popStart = `        function populateContent() {`;
const popStartNew = `        function populateContent() {
            let galleryScrollLeft = 0;
            const filmstripContainer = document.querySelector('.gallery-filmstrip-container');
            if (filmstripContainer) {
                galleryScrollLeft = filmstripContainer.scrollLeft;
            }`;
html = html.replace(popStart, popStartNew);

const popEndMatch = `                        </div>
                        <div class="gallery-thumbnails" id="gallery-thumbnails"></div>
                    </div>
                \`;`;
const popEndNew = `                        </div>
                        <div class="gallery-thumbnails" id="gallery-thumbnails"></div>
                    </div>
                \`;
                
                // Immediately restore scroll state synchronously
                const newFilmstripContainer = document.querySelector('.gallery-filmstrip-container');
                if (newFilmstripContainer && galleryScrollLeft > 0) {
                    newFilmstripContainer.scrollLeft = galleryScrollLeft;
                }`;
html = html.replace(popEndMatch, popEndNew);

fs.writeFileSync('index.html', html);
console.log('Restored populateContent with scroll sync');
