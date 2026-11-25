import puppeteer from 'puppeteer-core';
import fs from 'fs';

const credlyBadges = [
  { id: '1', name: 'AI Applications', url: 'https://www.credly.com/badges/4a4c1469-0582-43de-a22d-2ea7bfa7769c/public_url' },
  { id: '2', name: 'AI Literacy', url: 'https://www.credly.com/badges/b0865319-ffc5-4588-ac44-298bab2580e7/public_url' },
  { id: '3', name: 'Artificial Intelligence Fundamentals', url: 'https://www.credly.com/badges/30a0e6fb-d7f6-4284-9a2f-ffa07646f091/public_url' },
  { id: '4', name: 'Data Analytics for Machine Learning', url: 'https://www.credly.com/badges/881a97c8-89a2-40e9-9d6a-bec91e0428ed/public_url' },
  { id: '5', name: 'Getting Started with Artificial Intelligence', url: 'https://www.credly.com/badges/09843b85-6bb3-4f89-ad27-e92add068463/public_url' },
  { id: '6', name: 'Machine Learning for Data Science Projects', url: 'https://www.credly.com/badges/7591d9c4-f941-46c6-a98c-f69e98198856/public_url' },
  { id: '7', name: 'Machine Learning Methods and Tools', url: 'https://www.credly.com/badges/267c746f-31be-4cd7-9c14-bc7ed4120467/public_url' },
  { id: '8', name: 'Natural Language Processing', url: 'https://www.credly.com/badges/498f5194-c40c-4bba-9957-51c3454da7b6/public_url' },
  { id: '9', name: 'Supervised Learning Methods', url: 'https://www.credly.com/badges/c428217e-c6f6-4b44-af9e-49e3806eb321/public_url' },
  { id: '10', name: 'Team Essentials for Designing AI Solutions', url: 'https://www.credly.com/badges/178d005f-8826-4884-9b17-5168a756475c/public_url' },
  { id: '11', name: 'Unsupervised Learning Methods', url: 'https://www.credly.com/badges/033afc50-6679-41c8-90f4-142602826875/public_url' }
];

const prNumbers = [84, 83, 82, 81, 80, 79, 78, 77, 76, 75];

async function main() {
  console.log('--- Fetching PR data from GitHub API ---');
  const prResults = [];
  for (const prNum of prNumbers) {
    const res = await fetch(`https://api.github.com/repos/S-AI-Projects/geekcomputers-Python/pulls/${prNum}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    if (!res.ok) {
      console.error(`Failed to fetch PR #${prNum}: ${res.status} ${res.statusText}`);
      continue;
    }
    const data = await res.json();
    prResults.push({
      prNumber: prNum,
      title: data.title,
      state: data.state,
      merged_at: data.merged_at,
      status: data.merged_at ? 'Merged' : (data.state === 'open' ? 'Open' : 'Closed'),
      url: data.html_url,
      body: data.body,
      user: data.user?.login
    });
    console.log(`Fetched PR #${prNum}: "${data.title}" status=${data.merged_at ? 'Merged' : data.state}`);
  }

  fs.writeFileSync('scripts/pr_data.json', JSON.stringify(prResults, null, 2));

  console.log('--- Fetching Credly badges in Chrome ---');
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const page = await browser.newPage();
  const badgeResults = [];

  for (const b of credlyBadges) {
    try {
      await page.goto(b.url, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 2000));
      const info = await page.evaluate(() => {
        const text = document.body.innerText;
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
        let issuedDate = '';
        let recipient = '';
        let issuer = 'IBM SkillsBuild';
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('Date issued:')) {
            issuedDate = lines[i].replace('Date issued:', '').trim();
          } else if (lines[i].startsWith('Issued on')) {
            issuedDate = lines[i].replace('Issued on', '').trim();
          }
          if (lines[i].includes('This badge was issued to')) {
            recipient = lines[i].replace('This badge was issued to', '').trim();
          }
        }
        const titleEl = document.querySelector('h1') || document.querySelector('[data-testid="badge-title"]');
        const title = titleEl ? titleEl.innerText.trim() : '';
        return { title, issuedDate, recipient, issuer };
      });

      badgeResults.push({
        id: b.id,
        requestedName: b.name,
        actualTitle: info.title || b.name,
        issuedDate: info.issuedDate,
        recipient: info.recipient,
        issuer: info.issuer,
        url: b.url
      });
      console.log(`Badge ${b.id}: "${info.title || b.name}" - Issued: ${info.issuedDate}`);
    } catch (err) {
      console.error(`Error on badge ${b.id}:`, err);
    }
  }

  await browser.close();
  fs.writeFileSync('scripts/badge_data.json', JSON.stringify(badgeResults, null, 2));
  console.log('Done fetching data!');
}

main().catch(console.error);
