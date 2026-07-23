const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// 1. the celestial scar -> celestial scars
content = content.replace(/the celestial scar/gi, 'celestial scars');

// 2. beast 2 -> humble
content = content.replace(/beast 2/gi, 'humble');
content = content.replace(/BEAST 2/g, 'HUMBLE'); // Just in case there are uppercase

// 3. For sketch: beast, use beast jp.png
content = content.replace(/name:\s*"sketch:\s*beast\.png",\s*type:\s*"image",\s*src:\s*"\/sketch:\s*beast\.png"/g, 
  'name: "sketch: beast.png",\n              type: "image",\n              src: "/beast-jp.png"');

// 4. For sketch: humble (formerly sketch: beast 2.png), use humble jp.png
content = content.replace(/name:\s*"sketch:\s*humble\.png",\s*type:\s*"image",\s*src:\s*"\/sketch:\s*beast\.png"/g, 
  'name: "sketch: humble.png",\n              type: "image",\n              src: "/humble-jp.png"');

fs.writeFileSync('index.html', content);
console.log("Replacements done!");
