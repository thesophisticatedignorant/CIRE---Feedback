const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Modify Escape key logic
const escKeyTarget = `            if (e.key === 'Escape') {
                // Close the highest active popup, or product detail
                const activePopups = Array.from(document.querySelectorAll('.popup-window.active'));
                if (activePopups.length > 0) {
                    // Sort by z-index to close top one
                    activePopups.sort((a, b) => parseInt(b.style.zIndex || 0) - parseInt(a.style.zIndex || 0));
                    closePopup(activePopups[0].id);
                    return;
                }
                const modal = document.getElementById('product-detail-modal');
                if (modal && modal.style.display === 'flex') {
                    closeProductDetail();
                    return;
                }
            }`;
const newEscKeyLogic = `            if (e.key === 'Escape') {
                const modal = document.getElementById('product-detail-modal');
                if (modal && modal.style.display === 'flex') {
                    closeProductDetail();
                    return;
                }
                // Specifically restricted Escape to ONLY product-detail-modal per user request.
                // It will no longer close popup-windows to enforce interaction and close button (X).
            }`;
html = html.replace(escKeyTarget, newEscKeyLogic);

// 2. Lock desktop layout
const positionFuncRegex = /function positionDesktopFolders\(\) \{[\s\S]*?\n        \}/;
const newPositionFunc = `function positionDesktopFolders() {
            // Strictly hardcoded layout to prevent rearrangement.
            const startY = 100;
            const gapY = 10;
            const itemHeight = 90;
            const rightEdge = window.innerWidth - 100;
            
            const leftFolders = ['macintosh-hd', 'inquiry'];
            let leftY = startY + 30; // moved down 30px
            leftFolders.forEach(id => {
                const el = document.getElementById(id);
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
                const el = document.getElementById(id);
                if (el) {
                    el.style.top = rightY + 'px';
                    el.style.left = rightEdge + 'px';
                    rightY += itemHeight + gapY;
                }
            });
        }`;
html = html.replace(positionFuncRegex, newPositionFunc);

// Prevent localStorage override of positions in makeDesktopDraggable
html = html.replace(/localStorage\.setItem\('cire-folder-positions'[\s\S]*?\);/, '// Removed localStorage override');

fs.writeFileSync('index.html', html);
console.log("Phase 1 complete");
