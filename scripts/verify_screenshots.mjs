import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = '/Users/namanlunia/.gemini/antigravity/scratch/PERSONAL_PORTFOLIO2/screenshots';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
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
    { name: '1440x900_roadmap', width: 1440, height: 900, hash: '#roadmap' },
    { name: '1440x900_projects', width: 1440, height: 900, hash: '#projects' },
    { name: '1440x900_achievements', width: 1440, height: 900, hash: '#achievements' },
    { name: '1440x900_contact', width: 1440, height: 900, hash: '#contact' },
    { name: '1280x720_top', width: 1280, height: 720, scroll: 0 },
    { name: '1024x768_top', width: 1024, height: 768, scroll: 0 },
    { name: '768x1024_top', width: 768, height: 1024, scroll: 0 },
    { name: '390x844_top', width: 390, height: 844, scroll: 0 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    const url = vp.hash ? `http://localhost:8000/${vp.hash}` : 'http://localhost:8000/';
    await page.goto(url, { waitUntil: 'networkidle0' });

    if (vp.hash) {
      await page.evaluate((targetHash) => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView();
      }, vp.hash);
      await new Promise((r) => setTimeout(r, 400));
    }

    const shotPath = path.join(OUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`Saved screenshot: ${shotPath}`);
  }

  // Also test mobile drawer open at 390x844
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle0' });
  const menuBtn = await page.$('button[aria-controls="mobile-nav-drawer"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 200));
    const mobileMenuPath = path.join(OUT_DIR, '390x844_drawer_open.png');
    await page.screenshot({ path: mobileMenuPath });
    console.log(`Saved screenshot: ${mobileMenuPath}`);
  }

  await browser.close();
  console.log('All screenshots completed successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
