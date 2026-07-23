const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove the second handleFileClick
html = html.replace(/        function handleFileClick\(fileName\) \{\n            \/\/ Keep this for backwards compatibility where it's still used\n            handleFileSingleClick\(fileName\);\n        \}\n/g, '');

// Update the first handleFileClick
const oldHandleClick = `        function handleFileClick(fileName) {
            // Check if it's a folder - navigate to it
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName);
            
            // Protection Check
            if (!isSystemUnlocked && isItemProtected(fileName)) {
                if (currentView !== 'columns') {
                    currentView = 'columns';
                    selectedColumnIndex = currentFiles.findIndex(f => f.name === fileName);
                    
                    // Update toolbar buttons visually
                    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                    const colsBtn = document.querySelector('.fa-columns')?.closest('.view-btn');
                    if (colsBtn) colsBtn.classList.add('active');

                    populateContent();
                }
                return;
            }




            if (currentView === 'columns' || currentView === 'gallery') {
                if (clickedFile && clickedFile.type === 'folder' && clickedFile.targetFolder) {
                    selectFolder(clickedFile.targetFolder);
                    return;
                }
            }
            // For files, we just highlight (handled by UI update above).
        }`;

const newHandleClick = `        function handleFileClick(fileName) {
            // Check if it's a folder - navigate to it
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName || f.name.replace(/\\.png$/, '') === fileName);
            
            // Protection Check
            if (!isSystemUnlocked && isItemProtected(fileName)) {
                if (currentView !== 'columns') {
                    currentView = 'columns';
                    selectedColumnIndex = currentFiles.findIndex(f => f.name === fileName || f.name.replace(/\\.png$/, '') === fileName);
                    
                    // Update toolbar buttons visually
                    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                    const colsBtn = document.querySelector('.fa-columns')?.closest('.view-btn');
                    if (colsBtn) colsBtn.classList.add('active');

                    populateContent();
                }
                return;
            }

            if (currentView === 'columns' || currentView === 'gallery') {
                if (clickedFile && clickedFile.type === 'folder' && clickedFile.targetFolder) {
                    selectFolder(clickedFile.targetFolder);
                    return;
                }
            }
            
            // Highlight it using single click logic
            handleFileSingleClick(fileName);
        }`;

html = html.replace(oldHandleClick, newHandleClick);

fs.writeFileSync('index.html', html);
console.log('Fixed handleFileClick overriding');
