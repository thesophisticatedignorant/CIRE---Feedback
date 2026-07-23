const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const jsMatch = html.match(/<script>([\s\S]*?)<\/script>/g);
if (jsMatch && jsMatch.length >= 2) {
    const content = jsMatch[1].replace(/<script>/, '').replace(/<\/script>/, '');
    fs.writeFileSync('test_syntax.cjs', content);
}
