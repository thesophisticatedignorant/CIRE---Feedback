const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const updatedPositionLogic = `function positionDesktopFolders() {
            // Strictly hardcoded layout to prevent rearrangement.
            const startY = 100;
            const gapY = 10;
            const itemHeight = 90;
            const rightEdge = window.innerWidth - 100;
            
            const leftFolders = ['macintosh-hd', 'inquiry'];
            let leftY = startY + 30; // moved down 30px
            leftFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`.desktop-folder[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = leftY + 'px';
                    el.style.left = '20px';
                    leftY += itemHeight + gapY;
                }
            });

            const rightFolders = [
                'cire-canon',
                'cire-concierge',
                'cire-hospitality',
                'sophisticated-brilliance',
                'sophisticated-ignorance'
            ];
            let rightY = startY;
            rightFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`.desktop-folder[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = rightY + 'px';
                    el.style.left = rightEdge + 'px';
                    rightY += itemHeight + gapY; // 10px spacing
                }
            });
        }`;

// Replace the old function block
html = html.replace(/function positionDesktopFolders\(\) \{[\s\S]*?\}\s*(?=\/\/ Make desktop folder draggable)/, updatedPositionLogic + '\n\n        ');
fs.writeFileSync('index.html', html);
console.log("Desktop folders restored");
