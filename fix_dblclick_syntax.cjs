const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The faulty regex replacement resulted in:
// ondblclick="handleFileDoubleClick('${file.name.replace(/\.png$/, ')">
// Wait, actually I just did:
// html = html.replace(/<div class="icon-view-item" onclick="handleFileSingleClick\('\$\{[^}]+\}'\)"/g, (match) => {
//    return match + ` ondblclick="handleFileDoubleClick('${match.match(/'(.*?)'/)[1]}')"`;
// });

// Let's just fix it properly by replacing the entire line
html = html.replace(/<div class="list-item" onclick="handleFileSingleClick\('\$\{file\.name\.replace\(\/\\\\\.png\$\/, ''\)\}'\)" ondblclick="handleFileDoubleClick\('\$\{file\.name\.replace\(\/\\\\\.png\$\/, '\)">/g, 
'<div class="list-item" onclick="handleFileSingleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')" ondblclick="handleFileDoubleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')">');

html = html.replace(/<div class="icon-view-item" onclick="handleFileSingleClick\('\$\{file\.name\.replace\(\/\\\\\.png\$\/, ''\)\}'\)" ondblclick="handleFileDoubleClick\('\$\{file\.name\.replace\(\/\\\\\.png\$\/, '\)">/g, 
'<div class="icon-view-item" onclick="handleFileSingleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')" ondblclick="handleFileDoubleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')">');

// To be safe, let's just do a manual string replace
// Since I know exactly what it looks like now:
html = html.replace(/<div class="list-item" onclick="handleFileSingleClick\('\$\{file\.name\.replace\(\/\\\.png\$\/, ''\)\}'\)" ondblclick="handleFileDoubleClick\('\$\{file\.name\.replace\(\/\\\.png\$\/, '\)">/g, 
'<div class="list-item" onclick="handleFileSingleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')" ondblclick="handleFileDoubleClick(\'${file.name.replace(/\\\\.png$/, \\\'\\\')}\')">');

fs.writeFileSync('index.html', html);
