const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];

let hasError = false;
scriptMatches.forEach((match, i) => {
    try {
        new Function(match[1]);
    } catch (e) {
        console.error(`Syntax error in script block ${i}: ${e.message}`);
        const lines = match[1].split('\n');
        const errLine = e.lineNumber || e.line || null;
        if(errLine) {
            console.error(lines[errLine-2]);
            console.error(lines[errLine-1]);
            console.error(lines[errLine]);
        }
        hasError = true;
    }
});

if (!hasError) console.log("No syntax errors found in inline scripts.");
