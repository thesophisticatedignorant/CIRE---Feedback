const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix Desktop Folders Selector
html = html.replace(/const el = document\.getElementById\(id\);/g, 'const el = document.getElementById(id) || document.querySelector(`[data-folder="${id}"]`);');

// 2. Fix Checkbox Alignment
// We need to add flex-direction: row to .checkbox-item to ensure it doesn't wrap strangely
html = html.replace(/\.checkbox-item \{ display: flex; align-items: center;/g, '.checkbox-item { display: flex; flex-direction: row !important; flex-wrap: nowrap !important; align-items: flex-start;');
// And make sure the input doesn't have weird margins
html = html.replace(/\.checkbox-item input\[type="checkbox"\] \{ margin-right: 8px; flex-shrink: 0;  appearance: none;/g, '.checkbox-item input[type="checkbox"] { margin-right: 8px !important; margin-top: 0px !important; flex-shrink: 0 !important; appearance: none;');

// 3. Fix toggleDelivery syntax error
const badToggle = `                        function toggleDelivery() {
                            const del = document.getElementById('inq-delivery').value;
                            const label = document.getElementById('location-label');
                            if (del === 'Yes') {
                                label.innerText = 'Delivery Location';
                            } else {
                                label.innerText = 'Pickup/Drop-off Location';
                            }
                        } else {
                                document.getElementById('pickup-col').style.display = 'block';
                                document.getElementById('delivery-col').style.display = 'none';
                            }
                        }`;
const goodToggle = `                        function toggleDelivery() {
                            const del = document.getElementById('inq-delivery').value;
                            const label = document.getElementById('location-label');
                            if (del === 'Yes') {
                                label.innerText = 'Delivery Location';
                            } else {
                                label.innerText = 'Pickup/Drop-off Location';
                            }
                        }`;
html = html.replace(badToggle, goodToggle);

// 4. Change Mclaren to McLaren
html = html.replace(/Mclaren/g, 'McLaren');

// 5. Fix Gallery view scroll jump
// The jump happens when hitting left arrow and it scrolls automatically.
// scrollItemIntoView for gallery uses scrollIntoView.
// We can use behavior: 'smooth' for gallery, or just change block: 'nearest' to inline: 'center' maybe?
// "improve the gallery view animation when scrolling back left so it doesnt jump unnecessarily"
// Jump happens because block: 'nearest' might scroll the page vertically if the gallery item is slightly out of view.
html = html.replace(/items\[index\]\.scrollIntoView\(\{ block: 'nearest', inline: 'nearest', behavior: 'auto' \}\);/g, 'items[index].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });');

// 6. Fix Icon View arrow up jumping
// In the keydown handler:
// } else if (e.key === 'ArrowUp') {
//     e.preventDefault();
//     let newIndex = selectedColumnIndex - (currentView === 'icons' ? cols : 1);
//     if (newIndex < 0) newIndex = 0; // <--- The issue! If it's < 0, it jumps to 0. It shouldn't navigate!
html = html.replace(/} else if \(e\.key === 'ArrowUp'\) \{\n                    e\.preventDefault\(\);\n                    let newIndex = selectedColumnIndex - \(currentView === 'icons' \? cols : 1\);\n                    if \(newIndex < 0\) newIndex = 0;\n                    selectColumnItem\(newIndex\);\n                    scrollItemIntoView\(newIndex\);\n                \}/, `} else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    let newIndex = selectedColumnIndex - (currentView === 'icons' ? cols : 1);
                    if (newIndex < 0) return; // Do not jump to 0 if we hit the ceiling
                    selectColumnItem(newIndex);
                    scrollItemIntoView(newIndex);
                }`);

// 7. Improve one click to highlight feature
// We need to add visual highlight for icon and list view.
// Let's add a global selected style.
const highlightStyle = `
        .icon-view-item.selected {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        .list-item.selected {
            background: rgba(255, 255, 255, 0.1);
        }
`;
html = html.replace('</style>', highlightStyle + '</style>');

// Modify handleFileSingleClick to apply the highlight class
const oldSingleClick = `function handleFileSingleClick(fileName) {
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName || f.name.replace(/\\.png$/, '') === fileName);
            if (clickedFile) {
                selectedFile = clickedFile;
                populateContent();
            }
        }`;
const newSingleClick = `function handleFileSingleClick(fileName) {
            const currentFiles = folderData[selectedFolder]?.files || [];
            const clickedFile = currentFiles.find(f => f.name === fileName || f.name.replace(/\\.png$/, '') === fileName);
            if (clickedFile) {
                selectedFile = clickedFile;
                populateContent();
                
                // Highlight in icon and list view
                document.querySelectorAll('.icon-view-item, .list-item').forEach(el => el.classList.remove('selected'));
                document.querySelectorAll('.icon-view-item, .list-item').forEach(el => {
                    const textContent = el.textContent || el.innerText;
                    if (textContent.includes(fileName)) {
                        el.classList.add('selected');
                    }
                });
            }
        }`;
html = html.replace(oldSingleClick, newSingleClick);


fs.writeFileSync('index.html', html);
console.log('Fixed multiple issues in index.html');
