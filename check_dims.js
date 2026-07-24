const sizeOf = require('image-size');
const files = [
  'humble-jp.png',
  'beast-jp.png',
  'Metamorphosis.png',
  'Earring Sketch.PNG',
  'Crater Cuban Concept.PNG'
];

files.forEach(file => {
  try {
    const dimensions = sizeOf('public/' + file);
    console.log(file, dimensions.width, dimensions.height, (dimensions.width / dimensions.height).toFixed(3));
  } catch (e) {
    console.log("Error reading", file, e.message);
  }
});
