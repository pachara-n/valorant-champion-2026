const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

  const overflowInfo = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    const overflowing = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > winWidth + 1 || rect.left < -1) {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          className: String(el.className),
          right: rect.right,
          left: rect.left,
          width: rect.width,
          winWidth: winWidth
        });
      }
    });
    return { docWidth, winWidth, overflowing: overflowing.slice(0, 15) };
  });

  console.log(JSON.stringify(overflowInfo, null, 2));
  await browser.close();
})();
