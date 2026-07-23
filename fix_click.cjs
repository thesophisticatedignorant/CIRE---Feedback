const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace handleFileClick with two functions
let updatedClickLogic = `function handleFileSingleClick(fileName) {
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName || f.name.replace(/\\.png$/, '') === fileName);
            if (clickedFile) {
                selectedFile = clickedFile;
                populateContent();
            }
        }

        function handleFileClick(fileName) {
            // Keep this for backwards compatibility where it's still used
            handleFileSingleClick(fileName);
        }

        window.handleFileDoubleClick = function(fileName) {`;

html = html.replace(/window\.handleFileDoubleClick = function\(fileName\) \{/, updatedClickLogic);

// Now change the icon and list rendering to use ondblclick
html = html.replace(/<div class="icon-view-item" onclick="handleFileClick\('/g, '<div class="icon-view-item" onclick="handleFileSingleClick(\'').replace(/<div class="list-item" onclick="handleFileClick\('/g, '<div class="list-item" onclick="handleFileSingleClick(\'');

html = html.replace(/<div class="icon-view-item" onclick="handleFileSingleClick\('\$\{[^}]+\}'\)"/g, (match) => {
    return match + ` ondblclick="handleFileDoubleClick('${match.match(/'(.*?)'/)[1]}')"`;
});

html = html.replace(/<div class="list-item" onclick="handleFileSingleClick\('\$\{[^}]+\}'\)"/g, (match) => {
    return match + ` ondblclick="handleFileDoubleClick('${match.match(/'(.*?)'/)[1]}')"`;
});

fs.writeFileSync('index.html', html);
console.log("Click logic updated");
