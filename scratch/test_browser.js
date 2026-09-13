const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:8000';

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE BROWSER AUTOMATION TESTS ---');
  
  const consoleErrors = [];
  const networkErrors = [];

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Monitor console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`Console Error: ${msg.text()}`);
    }
  });

  // Monitor page errors
  page.on('pageerror', err => {
    consoleErrors.push(`Page Error: ${err.toString()}`);
  });

  // Monitor network failures
  page.on('response', resp => {
    if (resp.status() >= 400) {
      networkErrors.push(`Network Error ${resp.status()}: ${resp.url()}`);
    }
  });

  // 1. DESKTOP VIEWPORT TEST (1280 x 800)
  console.log('\n[1/7] Testing Desktop Viewport (1280x800)...');
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Verify Title
  const title = await page.title();
  console.log(`Page title: "${title}"`);
  if (!title.includes('CHAMPIONS 26')) {
    throw new Error(`Unexpected page title: ${title}`);
  }

  // Check horizontal overflow on desktop
  const desktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Desktop horizontal overflow: ${desktopOverflow ? 'FAIL' : 'PASS (No overflow)'}`);
  if (desktopOverflow) throw new Error('Desktop horizontal overflow detected!');

  // Verify removed sections (05 Stories & 06 Methodology) are NOT in DOM
  const removedSections = await page.evaluate(() => {
    return {
      stories: document.querySelector('#stories'),
      method: document.querySelector('#method'),
      sources: document.querySelector('#sources')
    };
  });
  if (removedSections.stories !== null) throw new Error('#stories should be removed from DOM!');
  if (removedSections.method !== null) throw new Error('#method should be removed from DOM!');
  if (removedSections.sources === null) throw new Error('#sources must exist in DOM!');
  console.log('Verified sections #stories and #method removed, #sources present: PASS');

  // Verify zero emojis in document body text
  const emojiCheck = await page.evaluate(() => {
    const text = document.body.innerText;
    const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1FA70}-\u{1FAFF}]/u;
    return emojiRegex.test(text);
  });
  if (emojiCheck) throw new Error('Emoji detected in document body text!');
  console.log('Zero emoji in rendered document text: PASS');

  // Take desktop full screenshot
  const qaDir = path.resolve(__dirname, '../docs/qa');
  if (!fs.existsSync(qaDir)) fs.mkdirSync(qaDir, { recursive: true });
  await page.screenshot({ path: path.join(qaDir, 'desktop-full.png'), fullPage: true });
  console.log('Saved desktop-full.png');

  // 2. LOGO INTEGRITY TEST
  console.log('\n[2/7] Testing All 16 Team Logos in DOM...');
  await page.evaluate(() => Promise.all(Array.from(document.images).map(img => img.decode().catch(() => {}))));
  const logoResults = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('.team-card .team-logo-img'));
    return images.map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      visible: img.offsetParent !== null
    }));
  });
  console.log(`Total team cards logos verified: ${logoResults.length}`);
  const brokenLogos = logoResults.filter(l => !l.complete || l.naturalWidth === 0);
  if (brokenLogos.length > 0) {
    console.error('Broken logos found:', brokenLogos);
    throw new Error(`${brokenLogos.length} broken logo(s) found!`);
  }
  console.log('All 16 team logos loaded with natural dimensions > 0: PASS');

  // 3. FILTER TESTS
  console.log('\n[3/7] Testing All Filter Buttons...');
  const filters = ['ALL', 'AMERICAS', 'EMEA', 'PACIFIC', 'CHINA', 'GROUP A', 'GROUP B', 'GROUP C', 'GROUP D'];
  for (const filter of filters) {
    const selector = `[data-filter="${filter}"]`;
    await page.click(selector);
    await new Promise(r => setTimeout(r, 100));
    
    const count = await page.evaluate(() => document.querySelectorAll('.team-card').length);
    const isPressed = await page.$eval(selector, el => el.getAttribute('aria-pressed'));
    console.log(`  Filter "${filter}": ${count} cards shown, aria-pressed=${isPressed}`);
    
    if (filter === 'ALL' && count !== 16) throw new Error(`Filter ALL should show 16 teams, showed ${count}`);
    if ((filter === 'AMERICAS' || filter === 'EMEA' || filter === 'PACIFIC' || filter === 'CHINA') && count !== 4) {
      throw new Error(`Filter ${filter} should show 4 teams, showed ${count}`);
    }
    if (filter.startsWith('GROUP') && count !== 4) {
      throw new Error(`Filter ${filter} should show 4 teams, showed ${count}`);
    }
    if (isPressed !== 'true') throw new Error(`Filter ${filter} aria-pressed is not true`);
  }
  // Reset filter to ALL
  await page.click('[data-filter="ALL"]');

  // 4. PREDICTION BRACKET TREE TESTS (All 4 Groups, Compact & Expandable, Cross-linking)
  console.log('\n[4/7] Testing All 4 GSL Prediction Trees & Expand/Collapse Interactions...');
  const groups = ['A', 'B', 'C', 'D'];
  for (const grp of groups) {
    const tabSelector = `[data-group="${grp}"]`;
    await page.click(tabSelector);
    await new Promise(r => setTimeout(r, 150));

    const bracketData = await page.evaluate(g => {
      const cards = document.querySelectorAll('#group-analysis .bracket-match-card');
      const qualCards = document.querySelectorAll('#group-analysis .qualified-card');
      const headline = document.querySelector('#group-analysis .group-headline')?.textContent || '';
      const hiddenDetailsCount = Array.from(document.querySelectorAll('#group-analysis .match-card-details')).filter(d => d.hidden).length;

      const scoreValidations = Array.from(cards).map((card, i) => {
        const rows = Array.from(card.querySelectorAll('.match-team-row'));
        const s1 = parseInt(rows[0]?.querySelector('.match-team-score')?.textContent || '0', 10);
        const s2 = parseInt(rows[1]?.querySelector('.match-team-score')?.textContent || '0', 10);
        const p1 = !!rows[0]?.querySelector('.pick-badge');
        const p2 = !!rows[1]?.querySelector('.pick-badge');
        const winnerHasHigherScore = (p1 && s1 > s2 && !p2) || (p2 && s2 > s1 && !p1);
        return { index: i, s1, s2, p1, p2, winnerHasHigherScore };
      });

      return {
        matchCount: cards.length,
        qualCount: qualCards.length,
        hiddenDetailsCount,
        scoreValidations,
        headline
      };
    }, grp);

    console.log(`  Group ${grp}: ${bracketData.matchCount} matches (${bracketData.hiddenDetailsCount} collapsed), ${bracketData.qualCount} qualified slots.`);
    if (bracketData.matchCount !== 5) throw new Error(`Group ${grp} must have exactly 5 matches, got ${bracketData.matchCount}`);
    if (bracketData.qualCount !== 2) throw new Error(`Group ${grp} must have exactly 2 qualified slots, got ${bracketData.qualCount}`);
    if (bracketData.hiddenDetailsCount !== 5) throw new Error(`Group ${grp} matches should all be compact/collapsed by default, got ${bracketData.hiddenDetailsCount}`);

    const invalidScore = bracketData.scoreValidations.find(v => !v.winnerHasHigherScore);
    if (invalidScore) {
      throw new Error(`Group ${grp} Match #${invalidScore.index} score mismatch! s1=${invalidScore.s1} (pick=${invalidScore.p1}), s2=${invalidScore.s2} (pick=${invalidScore.p2})`);
    }

    // Save screenshots for Groups B, C, D
    if (grp === 'B' || grp === 'C' || grp === 'D') {
      const bracketEl = await page.$('#group-analysis');
      if (bracketEl) {
        await bracketEl.screenshot({ path: path.join(qaDir, `group-${grp.toLowerCase()}-bracket.png`) });
        console.log(`  Saved group-${grp.toLowerCase()}-bracket.png`);
      }
    }
  }

  // Switch to Group C and test Expand/Collapse interactions
  await page.click('[data-group="C"]');
  await new Promise(r => setTimeout(r, 150));

  // Test single match expand
  const firstExpandBtn = '#group-analysis .bracket-match-card:first-child .match-expand-btn';
  await page.click(firstExpandBtn);
  await new Promise(r => setTimeout(r, 100));
  const singleExpanded = await page.evaluate(() => {
    const firstDetails = document.querySelector('#group-analysis .bracket-match-card:first-child .match-card-details');
    return firstDetails && !firstDetails.hidden;
  });
  console.log(`  Single match expand toggle: ${singleExpanded ? 'PASS' : 'FAIL'}`);
  if (!singleExpanded) throw new Error('Single match failed to expand details!');

  // Test toggle all button (Expand all 5 matches)
  await page.click('#toggle-all-details-btn');
  await new Promise(r => setTimeout(r, 100));
  const allExpandedCount = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#group-analysis .match-card-details')).filter(d => !d.hidden).length;
  });
  console.log(`  Global Expand All: ${allExpandedCount}/5 matches expanded`);
  if (allExpandedCount !== 5) throw new Error(`Global Expand All failed! Only ${allExpandedCount}/5 expanded.`);

  // Test toggle all button (Collapse all back)
  await page.click('#toggle-all-details-btn');
  await new Promise(r => setTimeout(r, 100));
  const allCollapsedCount = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#group-analysis .match-card-details')).filter(d => d.hidden).length;
  });
  console.log(`  Global Collapse All: ${allCollapsedCount}/5 matches collapsed`);
  if (allCollapsedCount !== 5) throw new Error(`Global Collapse All failed! Only ${allCollapsedCount}/5 collapsed.`);

  // Take screenshot of Group C (Group of Death) compact bracket tree
  const bracketEl = await page.$('#group-analysis');
  if (bracketEl) {
    await bracketEl.screenshot({ path: path.join(qaDir, 'group-c-bracket.png') });
    console.log('Saved group-c-bracket.png');
  }

  // Test Cross-linking from bracket to Team Dossier
  console.log('  Testing Cross-linking: clicking team row in bracket to open dossier...');
  await page.click('#group-analysis [data-team="prx"]');
  await new Promise(r => setTimeout(r, 150));
  const prxDossierFromBracket = await page.evaluate(() => {
    const dialog = document.querySelector('#team-dialog');
    const title = document.querySelector('#profile-title')?.textContent || '';
    return { isOpen: dialog?.open, title };
  });
  if (!prxDossierFromBracket.isOpen || !prxDossierFromBracket.title.includes('Paper Rex')) {
    throw new Error('Cross-linking from bracket card to Team Dossier failed!');
  }
  console.log(`  Bracket -> Dossier cross-linking: PASS (opened "${prxDossierFromBracket.title}")`);

  // Test Modal Navigation (Next Team button)
  console.log('  Testing Modal Navigation: clicking Next Team button...');
  const nextTeamBtn = '#team-dialog .next-team-btn';
  await page.click(nextTeamBtn);
  await new Promise(r => setTimeout(r, 150));
  const cycledTeam1 = await page.evaluate(() => document.querySelector('#profile-title')?.textContent || '');
  console.log(`  Next Team button cycled to: "${cycledTeam1}"`);
  if (cycledTeam1.includes('Paper Rex')) throw new Error('Next Team button failed to cycle team!');

  // Test Modal Keyboard Navigation (ArrowRight)
  console.log('  Testing Modal Keyboard Navigation: pressing ArrowRight...');
  await page.keyboard.press('ArrowRight');
  await new Promise(r => setTimeout(r, 150));
  const cycledTeam2 = await page.evaluate(() => document.querySelector('#profile-title')?.textContent || '');
  console.log(`  ArrowRight key cycled to: "${cycledTeam2}"`);
  if (cycledTeam2 === cycledTeam1) throw new Error('ArrowRight key failed to cycle team!');

  // Close dialog
  await page.click('.dialog-close-btn');
  await new Promise(r => setTimeout(r, 100));

  // 5. TEAM DOSSIER MODAL DIALOG TESTS (All 16 Teams)
  console.log('\n[5/7] Testing All 16 Team Dossiers (Modal Dialog)...');
  const teamIds = [
    '100t', 't1', 'jdg', 'fut',
    'ge', 'vit', 'loud', 'edg',
    'tyloo', 'g2', 'tl', 'prx',
    'kc', 'xlg', 'ns', 'nrg'
  ];

  for (const tid of teamIds) {
    // Click team card
    const cardSelector = `.team-card[data-team="${tid}"]`;
    await page.click(cardSelector);
    await new Promise(r => setTimeout(r, 100));

    const dossierInfo = await page.evaluate(id => {
      const dialog = document.querySelector('#team-dialog');
      const isOpen = dialog ? dialog.open : false;
      const title = document.querySelector('#profile-title')?.textContent || '';
      const rosterItems = document.querySelectorAll('.roster-item').length;
      const staffItems = document.querySelectorAll('.staff-item').length;
      const navBar = document.querySelector('.dossier-nav-bar');
      const counter = document.querySelector('.dossier-counter')?.textContent || '';
      const hash = window.location.hash;
      return { isOpen, title, rosterItems, staffItems, hasNav: !!navBar, counter, hash };
    }, tid);

    if (!dossierInfo.isOpen) throw new Error(`Dialog failed to open for team ${tid}`);
    if (dossierInfo.rosterItems < 5) throw new Error(`Team ${tid} roster has only ${dossierInfo.rosterItems} players (expected >= 5)`);
    if (!dossierInfo.hasNav) throw new Error(`Team ${tid} dossier is missing .dossier-nav-bar!`);
    if (!dossierInfo.counter.includes('/ 16')) throw new Error(`Team ${tid} counter invalid: ${dossierInfo.counter}`);
    if (!dossierInfo.hash.includes(tid)) throw new Error(`Hash not updated to #team/${tid}, got ${dossierInfo.hash}`);

    // If it's 100T, take a screenshot of the dossier
    if (tid === '100t') {
      const dialogEl = await page.$('#team-dialog');
      await dialogEl.screenshot({ path: path.join(qaDir, 'team-dossier-100t.png') });
      console.log('Saved team-dossier-100t.png');
    }

    // Close via close button
    await page.click('.dialog-close-btn');
    await new Promise(r => setTimeout(r, 100));

    const isClosed = await page.$eval('#team-dialog', d => !d.open);
    if (!isClosed) throw new Error(`Dialog failed to close for team ${tid}`);
  }
  console.log('All 16 team dossiers opened, verified (roster >= 5, staff, road, maps, prev/next nav), and closed cleanly: PASS');

  // 6. DEEP LINKING & KEYBOARD TESTS
  console.log('\n[6/7] Testing Deep Linking & History Navigation...');
  await page.goto(`${URL}/#team/prx`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 200));
  const prxOpen = await page.$eval('#team-dialog', d => d.open);
  const prxTitle = await page.$eval('#profile-title', el => el.textContent);
  console.log(`  Deep link #team/prx: open=${prxOpen}, title="${prxTitle}"`);
  if (!prxOpen || !prxTitle.includes('Paper Rex')) throw new Error('Deep link #team/prx failed!');

  // Test ESC key closes dialog
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 100));
  const escClosed = await page.$eval('#team-dialog', d => !d.open);
  console.log(`  Escape key closed dialog: ${escClosed ? 'PASS' : 'FAIL'}`);
  if (!escClosed) throw new Error('Escape key failed to close dialog!');

  // Test deep link #group/B
  await page.goto(`${URL}/#group/B`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 200));
  const groupBActive = await page.$eval('#tab-B', tab => tab.getAttribute('aria-selected') === 'true');
  console.log(`  Deep link #group/B active tab: ${groupBActive ? 'PASS' : 'FAIL'}`);
  if (!groupBActive) throw new Error('Deep link #group/B failed!');

  // 7. MOBILE RESPONSIVE TEST (375 x 812 iPhone)
  console.log('\n[7/7] Testing Mobile Viewport (375x812)...');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  const mobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Mobile 375px horizontal overflow: ${mobileOverflow ? 'FAIL (overflow detected)' : 'PASS (No overflow)'}`);
  if (mobileOverflow) throw new Error('Mobile 375px horizontal overflow detected!');

  // Check GSL bracket vertical layout on mobile
  await page.click('[data-group="A"]');
  await page.screenshot({ path: path.join(qaDir, 'mobile-bracket-375.png'), fullPage: false });
  console.log('Saved mobile-bracket-375.png');

  // Check mobile dossier
  await page.click('.team-card[data-team="ge"]');
  await new Promise(r => setTimeout(r, 150));
  const mobileDialogEl = await page.$('#team-dialog');
  await mobileDialogEl.screenshot({ path: path.join(qaDir, 'mobile-dossier-ge.png') });
  console.log('Saved mobile-dossier-ge.png');
  await page.click('.dialog-close-btn');

  // CONSOLE & NETWORK ERROR AUDIT
  console.log('\n--- ERROR AUDIT ---');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  console.log(`Total Network Errors: ${networkErrors.length}`);

  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Console errors were found!');
  }
  if (networkErrors.length > 0) {
    console.error('Network errors:', networkErrors);
    throw new Error('Network errors were found!');
  }

  await browser.close();
  console.log('\n✅ ALL BROWSER AUTOMATION TESTS PASSED WITH ZERO ERRORS!');
}

runTests().catch(err => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
