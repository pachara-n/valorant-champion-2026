const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testPlayoffs() {
  console.log('Testing playoffs.html...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:8000/playoffs.html', { waitUntil: 'networkidle0' });

  // Title
  const title = await page.title();
  console.log('Title:', title);

  // Emojis
  const hasEmoji = await page.evaluate(() => {
    const text = document.body.innerText;
    const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1FA70}-\u{1FAFF}]/u;
    return emojiRegex.test(text);
  });
  console.log('Zero Emojis:', !hasEmoji);

  // Outdated maps
  const badMaps = await page.evaluate(() => {
    const text = document.body.innerText;
    const banned = ['Breeze', 'Split', 'Fracture', 'Pearl'];
    return banned.filter(m => new RegExp('\\b' + m + '\\b', 'i').test(text));
  });
  console.log('Banned maps found:', badMaps);

  // Match cards count
  const cardCount = await page.evaluate(() => document.querySelectorAll('.match-card').length);
  console.log('Total match cards rendered:', cardCount);

  // Click first card to test modal
  await page.click('.match-card[data-match-id="gf"]');
  await new Promise(r => setTimeout(r, 400));
  const isModalOpen = await page.evaluate(() => {
    const backdrop = document.getElementById('match-modal-backdrop');
    return backdrop.classList.contains('open');
  });
  console.log('Modal opened on click:', isModalOpen);

  // Take screenshot
  await page.screenshot({ path: 'docs/qa/playoffs-preview.png', fullPage: true });
  console.log('Saved docs/qa/playoffs-preview.png');

  console.log('Console Errors:', consoleErrors.length);
  await browser.close();
}

testPlayoffs().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
