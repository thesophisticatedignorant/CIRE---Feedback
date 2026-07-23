const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = html.match(/<script>([\s\S]*?)<\/script>/g);
if (scriptMatches) {
    scriptMatches.forEach((scriptTag, idx) => {
        const js = scriptTag.replace(/<\/?script>/g, '');
        fs.writeFileSync(`test_script_${idx}.js`, js);
        try {
            require('child_process').execSync(`node -c test_script_${idx}.js`);
            console.log(`Script ${idx} OK`);
        } catch(e) {
            console.log(`Script ${idx} ERR`, e.stderr.toString());
        }
    });
}
