const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const styles = content.match(/<style>([\s\S]*?)<\/style>/g);
const css = styles[1].replace(/<\/?style>/g, '');

const cssom = require('cssom');
try {
  const ast = cssom.parse(css);
  console.log("Main CSS parsed successfully! Rule count:", ast.cssRules.length);
} catch (e) {
  console.error("CSS PARSE ERROR:", e);
}
