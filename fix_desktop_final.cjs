const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldPos = `        function positionDesktopFolders() {
            // Strictly hardcoded layout to prevent rearrangement.
            const startY = 100;
            const gapY = 10;
            const itemHeight = 90;
            const rightEdge = window.innerWidth - 100;
            
            const leftFolders = ['macintosh-hd', 'inquiry'];
            let leftY = startY + 30; // moved down 30px
            leftFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = leftY + 'px';
                    el.style.left = '20px';
                    leftY += itemHeight + gapY;
                }
            });

            const rightFolders = [
                'sophisticated-ignorance',
                'sophisticated-brilliance',
                'cire-hospitality',
                'cire-concierge',
                'cire-canon'
            ];
            let rightY = startY;
            rightFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = rightY + 'px';
                    el.style.left = rightEdge + 'px';
                    rightY += itemHeight + gapY;
                }
            });
        }`;

const newPos = `        function positionDesktopFolders() {
            // Strictly hardcoded layout to prevent rearrangement.
            const startY = 100;
            const gapY = 10;
            const rightEdge = window.innerWidth - 100;
            
            const leftFolders = ['macintosh-hd', 'inquiry'];
            let leftY = startY + 60; // Lowered by an additional 30px down
            leftFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = leftY + 'px';
                    el.style.left = '20px';
                    leftY += (el.offsetHeight || 100) + gapY; // Exact 10px separation based on actual height
                }
            });

            const rightFolders = [
                'sophisticated-ignorance',
                'sophisticated-brilliance',
                'cire-hospitality',
                'cire-concierge',
                'cire-canon'
            ];
            let rightY = startY;
            rightFolders.forEach(id => {
                const el = document.getElementById(id) || document.querySelector(\`[data-folder="\${id}"]\`);
                if (el) {
                    el.style.top = rightY + 'px';
                    el.style.left = rightEdge + 'px';
                    rightY += (el.offsetHeight || 100) + gapY; // Exact 10px separation based on actual height
                }
            });
        }`;

html = html.replace(oldPos, newPos);
fs.writeFileSync('index.html', html);
console.log('Fixed desktop folders again');
