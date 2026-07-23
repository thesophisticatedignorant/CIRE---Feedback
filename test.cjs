const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const isItemProtectedSrc = code.match(/function isItemProtected.*?return false;\s*\}/s);
if (isItemProtectedSrc) {
    console.log(isItemProtectedSrc[0]);
} else {
    console.log("NOT FOUND");
}
