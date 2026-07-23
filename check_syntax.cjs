const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

// Find the folderData block
const match = content.match(/const folderData = \{([\s\S]*?)\};\n/);
if (match) {
    try {
        const obj = eval('({' + match[1] + '})');
        console.log("folderData parsed successfully! keys:", Object.keys(obj).length);
    } catch(e) {
        console.error("SYNTAX ERROR IN folderData:", e);
    }
} else {
    console.log("Could not find folderData block");
}
