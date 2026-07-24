const Jimp = require('jimp');

async function main() {
    const bgHex = '#1d1d1f';
    const bgNum = Jimp.cssColorToHex(bgHex);
    const img = await Jimp.read('public/CIRE Logo BWwoBG.png');
    
    // Create a new solid background image
    const bg = new Jimp(img.bitmap.width, img.bitmap.height, bgNum);
    
    // Composite the logo over the background
    bg.composite(img, 0, 0);
    
    // Save to a new file so we don't break anything else that relies on the transparent one
    await bg.writeAsync('public/CIRE Logo OG.png');
    console.log('Done!');
}
main();
