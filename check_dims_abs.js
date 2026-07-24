const fs = require('fs');
const path = require('path');

const files = [
  'humble-jp.png',
  'beast-jp.png',
  'Metamorphosis.png',
  'Earring Sketch.PNG',
  'Crater Cuban Concept.PNG'
];

const basePath = '/Users/thesophisticatedignorant/.gemini/antigravity/scratch/CIRE-github/public';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  try {
    const buffer = Buffer.alloc(24);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);
    
    // PNG format
    if (buffer.toString('hex', 0, 8) === '89504e470d0a1a0a') {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      console.log(`${file}: ${width}x${height} aspect=${(width/height).toFixed(3)}`);
    } else {
      console.log(`${file}: Not a standard PNG`);
    }
  } catch (e) {
    console.log(`Error reading ${file}: ${e.message}`);
  }
});
