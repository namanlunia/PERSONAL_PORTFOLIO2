import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = '/Users/namanlunia/.gemini/antigravity/scratch/PERSONAL_PORTFOLIO2/screenshots';
const ARTIFACT_DIR = '/Users/namanlunia/.gemini/antigravity/brain/ae0c5576-e852-493d-a910-d9ffe2e9eb31/screenshots';

for (const d of [OUT_DIR, ARTIFACT_DIR]) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  const viewports = [
    { name: '1440x900_top', width: 1440, height: 900, scroll: 0 },
    { name: '1440x900_about', width: 1440, height: 900, hash: '#about' },
    { name: '1440x900_skills', width: 1440, height: 900, hash: '#skills' },
    { name: '1440x900_contributions', width: 1440, height: 900, hash: '#contributions' },
    { name: '1440x900_projects', width: 1440, height: 900, hash: '#projects' },
    { name: '1440x900_education', width: 1440, height: 900, hash: '#education' },
    { name: '1440x900_contact', width: 1440, height: 900, hash: '#contact' },
    { name: '768x1024_top', width: 768, height: 1024, scroll: 0 },
    { name: '390x844_top', width: 390, height: 844, scroll: 0 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:8000/', { waitUntil: 'networkidle0' });

    if (vp.hash) {
      await page.evaluate((targetHash) => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'instant' });
      }, vp.hash);
      await new Promise((r) => setTimeout(r, 400));
    }

    const shotPath = path.join(OUT_DIR, `${vp.name}.png`);
    const artPath = path.join(ARTIFACT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: shotPath });
    fs.copyFileSync(shotPath, artPath);
    console.log(`Saved screenshot: ${shotPath}`);
  }

  // Also test mobile drawer open at 390x844
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle0' });
  const menuBtn = await page.$('button[aria-controls="mobile-nav-drawer"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    const mobileMenuPath = path.join(OUT_DIR, '390x844_drawer_open.png');
    const mobileMenuArtPath = path.join(ARTIFACT_DIR, '390x844_drawer_open.png');
    await page.screenshot({ path: mobileMenuPath });
    fs.copyFileSync(mobileMenuPath, mobileMenuArtPath);
    console.log(`Saved screenshot: ${mobileMenuPath}`);
  }

  // Verify elements in DOM
  const domStats = await page.evaluate(() => {
    return {
      headerHeight: document.querySelector('header')?.getBoundingClientRect().height,
      navItemsCount: document.querySelectorAll('header nav ul li').length,
      prEntriesCount: document.querySelectorAll('#contributions article').length,
      badgesCount: document.querySelectorAll('#education .divide-y > div').length,
      sectionHeadings: Array.from(document.querySelectorAll('section h2')).map(h => h.innerText.trim()),
    };
  });
  console.log('DOM Verification Stats:', domStats);

  await browser.close();
  console.log('All screenshots and DOM verification completed successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
