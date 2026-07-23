const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const jsMatch = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (jsMatch) {
    fs.writeFileSync('test_syntax.js', jsMatch[1]);
} else {
    console.log("No script found");
}
