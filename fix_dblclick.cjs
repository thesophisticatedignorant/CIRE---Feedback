const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix thumbnail dblclick listener
const oldDblClick = `                    thumb.addEventListener('dblclick', () => {
                        if (file.type === 'folder') {
                            selectFolder(file.targetFolder);
                        } else {
                            handleFileClick(file.name.replace(/\\\\.png$/, ''));
                        }
                    });`;
const newDblClick = `                    thumb.addEventListener('dblclick', () => {
                        if (file.type === 'folder') {
                            selectFolder(file.targetFolder);
                        } else {
                            handleFileDoubleClick(file.name.replace(/\\\\.png$/, ''));
                        }
                    });`;
html = html.replace(new RegExp(oldDblClick.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newDblClick);

// Fix populateContent video
const oldPopVideo = `previewContent = \`<video src="\${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline></video>\`;`;
const newPopVideo = `previewContent = \`<video src="\${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline ondblclick="handleFileDoubleClick('\${selectedFile.name.replace(/\\\\.png$/, '')}')"></video>\`;`;
html = html.replace(oldPopVideo, newPopVideo);

// Fix updateGalleryDOM video
const oldUpdVideo = `previewContainer.innerHTML = \`<video src="\${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline></video>\`;`;
const newUpdVideo = `previewContainer.innerHTML = \`<video src="\${selectedFile.src}" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline ondblclick="handleFileDoubleClick('\${selectedFile.name.replace(/\\\\.png$/, '')}')"></video>\`;`;
html = html.replace(oldUpdVideo, newUpdVideo);

fs.writeFileSync('index.html', html);
console.log('Fixed dblclick issues');
