const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const { execSync } = require('child_process');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

async function processImages() {
    const carsDir = 'public/cars';
    const files = fs.readdirSync(carsDir).filter(f => f.endsWith('.png'));
    let count = 0;
    
    for (const file of files) {
        const filePath = path.join(carsDir, file);
        const tempPath = path.join(carsDir, 'temp_' + file);
        try {
            // Trim transparent pixels
            const img = await Jimp.read(filePath);
            img.autocrop();
            await img.writeAsync(tempPath);
            fs.renameSync(tempPath, filePath);
            count++;
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
    console.log(`Trimmed ${count} car images.`);
    
    // Compress CC V6.png
    const ccPath = 'public/CC V6.png';
    if (fs.existsSync(ccPath)) {
        const tempCcPath = 'public/temp_CC V6.png';
        try {
            const ccImg = await Jimp.read(ccPath);
            if (ccImg.bitmap.width > 1920) {
                ccImg.scaleToFit(1920, 1080);
            }
            ccImg.quality(80);
            await ccImg.writeAsync(tempCcPath);
            fs.renameSync(tempCcPath, ccPath);
            console.log('Compressed CC V6.png');
        } catch (err) {
            console.error('Error compressing CC V6.png:', err);
        }
    }
}

function processVideos() {
    const videos = [
        'public/SB Rotating Logo.mp4',
        'public/coming soon.mp4',
        'public/transcendence of man.mp4',
        'public/assets/SI-Spiral-Stream.mp4'
    ];
    
    for (const vid of videos) {
        if (!fs.existsSync(vid)) continue;
        const tempVid = vid.replace('.mp4', '_compressed.mp4');
        console.log(`Compressing ${vid}...`);
        try {
            // Check if it's the massive background video to apply extra compression
            const isBackground = vid.includes('SI-Spiral-Stream');
            const crf = isBackground ? 32 : 28;
            
            execSync(`"${ffmpegPath}" -y -i "${vid}" -vcodec libx264 -crf ${crf} -preset fast -vf "scale=-2:720" "${tempVid}"`, { stdio: 'inherit' });
            fs.renameSync(tempVid, vid);
            console.log(`Successfully compressed ${vid}`);
        } catch (err) {
            console.error(`Error compressing ${vid}:`, err.message);
        }
    }
}

async function run() {
    console.log('Starting compression...');
    await processImages();
    processVideos();
    console.log('Compression complete.');
}

run();
