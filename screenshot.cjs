const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('file://' + __dirname + '/index.html');
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
