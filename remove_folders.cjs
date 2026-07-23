const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// Remove tom-cads block
content = content.replace(/\s*"tom-cads": \{[\s\S]*?\},/g, '');

// Remove tom-wax block
content = content.replace(/\s*"tom-wax": \{[\s\S]*?\},/g, '');

// Remove "tom-cads", from array
content = content.replace(/\s*"tom-cads",/g, '');

// Remove "tom-wax", from array
content = content.replace(/\s*"tom-wax",/g, '');

fs.writeFileSync('index.html', content);
console.log("Removed cads and wax models folders!");
