const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Step 1: Save scroll state at the top of populateContent
const populateStart = `        function populateContent() {`;
const populateStartReplacement = `        function populateContent() {
            let galleryScrollLeft = 0;
            const filmstripContainer = document.querySelector('.gallery-filmstrip-container');
            if (filmstripContainer) {
                galleryScrollLeft = filmstripContainer.scrollLeft;
            }`;
html = html.replace(populateStart, populateStartReplacement);

// Step 2: Restore scroll state right after generating gallery view HTML
// We need to find the end of the gallery HTML generation.
// Look for the end of the gallery HTML block.
const galleryEndMatch = `                        </div>
                    </div>
                \`;
            }
        }`;

// Let's replace the last part of gallery generation
// Wait, the end of populateContent is `            }
        }`

const populateEnd = `                        </div>
                    </div>
                \`;
            }
        }`;

const populateEndReplacement = `                        </div>
                    </div>
                \`;
                
                // Restore scroll state so it doesn't jump
                const newFilmstripContainer = document.querySelector('.gallery-filmstrip-container');
                if (newFilmstripContainer && galleryScrollLeft > 0) {
                    newFilmstripContainer.scrollLeft = galleryScrollLeft;
                }
            }
        }`;
html = html.replace(populateEnd, populateEndReplacement);

fs.writeFileSync('index.html', html);
console.log('Fixed gallery scroll jump');
