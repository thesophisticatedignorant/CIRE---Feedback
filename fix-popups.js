const fs = require('fs');
const path = require('path');

const filePath = '/Users/thesophisticatedignorant/.gemini/antigravity/scratch/CIRE-github/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add .popup-share-icon CSS after .popup-title
const cssToAdd = `
      .popup-share-icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        color: #636366;
        font-size: 11px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .popup-share-icon:hover {
        color: #888;
      }
`;
if (!content.includes('.popup-share-icon {')) {
    content = content.replace('.popup-title {', cssToAdd + '\n      .popup-title {');
}

// 2. Add share icon to all popup-titlebar
// We want to insert the share icon right before the closing </div> of the titlebar
// The titlebar structure is:
// <div class="popup-titlebar">
//   <div class="popup-controls">...</div>
//   <span class="popup-title">...</span>
// </div>

content = content.replace(/<span class="popup-title">([^<]+)<\/span>\s*<\/div>/g, (match, title) => {
    // Determine the share type and id based on title
    // title could be TRANSCENDENCE OF MAN, BEAST, etc.
    let shareTitle = title.trim();
    // Use dynamic string for title so it gets passed to copyShareUrl
    return `<span class="popup-title">${title}</span>
          <span class="popup-share-icon" title="Share Link" onclick="copyShareUrl('file', '${shareTitle.replace(/'/g, "\\'")}', this)"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </div>`;
});

// 3. Fix openImagePopup
const oldImagePopupShareBtn = `<span class="popup-control share-btn" style="cursor:pointer; margin-right:8px; display: flex; align-items: center; justify-content: center;" title="Share Link" onclick="copyShareUrl('file', '\${title}', this)"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #636366; font-size: 11px;"></i></span>`;
content = content.replace(oldImagePopupShareBtn, ''); // Remove the old share btn from popup-controls

// The regex above for popup-title already added the share icon to the static popups.
// BUT for openImagePopup, the HTML string in JS is slightly different:
// <span class="popup-title">\${title}</span>
// </div>
// Our regex matched it and replaced it!
// Let's ensure it's correct for JS template literals.
// Wait, the title in JS is `${title}`, so it became `${title}` in the replacement. That's fine!

// 4. Update openImagePopup to fix sketch sizes
content = content.replace(
    'popup.style.paddingBottom = "0px";',
    `popup.style.paddingBottom = "0px";

        if (title.toLowerCase().startsWith("sketch")) {
            popup.style.width = "400px";
            popup.style.height = "550px";
            const img = popup.querySelector("img");
            if (img) {
                img.style.height = "100%";
                img.style.objectFit = "cover";
            }
        }`
);

// 5. Fix handleFileSingleClick
const oldSingleClickLogic = `          if (window.innerWidth <= 768 && selectedColumnIndex === index) {
            if (clickedFile.type === "folder") {
                selectFolder(clickedFile.targetFolder);
            } else {
                handleFileDoubleClick(clickedFile.name.replace(/\\.png$/, ""));
            }
            return;
          }`;
const newSingleClickLogic = `          if (window.innerWidth <= 768) {
            if (clickedFile.type === "folder") {
                selectFolder(clickedFile.targetFolder);
            } else {
                handleFileDoubleClick(clickedFile.name.replace(/\\.png$/, ""));
            }
            return;
          }`;
content = content.replace(oldSingleClickLogic, newSingleClickLogic);

// 6. Fix handleFileDoubleClick (missing files)
const doubleClickVideoTrigger = `// SB Logo video trigger
        if (fileName === "logo.mp4") {
          openPopup("popup-sb-logo");
          return;
        }`;
const newDoubleClickVideoTrigger = `// SB Logo video trigger
        if (fileName === "logo.mp4" || fileName === "collection 1 logo.mp4") {
          openPopup("popup-sb-logo");
          return;
        }
        
        if (fileName === "collection narrative.rfd") {
          openPopup("popup-collection-overview");
          return;
        }`;
content = content.replace(doubleClickVideoTrigger, newDoubleClickVideoTrigger);

// 7. Remove duplicate onclick from product detail share button
content = content.replace(
    `onclick="copyShareLink()"
              style="`,
    `style="`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated index.html");
