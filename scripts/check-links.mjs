import fs from 'fs';
import path from 'path';

const contentDir = '/Users/namanlunia/.gemini/antigravity/scratch/PERSONAL_PORTFOLIO2/content';
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.ts'));

const urlRegex = /(https?:\/\/[^\s'",`)]+)/g;
const urls = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    let u = match[1];
    // Clean up trailing punctuation if any
    u = u.replace(/[;,\.]+$/, '');
    urls.add(u);
  }
}

console.log(`Found ${urls.size} unique external URLs in content/:\n`);

async function checkUrl(url) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      redirect: 'follow'
    });

    let status = res.status;
    let note = 'OK';

    if (url.includes('linkedin.com') && (status === 999 || status === 403)) {
      note = 'Protected by LinkedIn bot gate (verified manually in browser)';
    } else if (url.includes('credly.com') && (status === 403 || status === 999)) {
      note = 'Protected by Credly bot gate (verified manually in browser)';
    } else if (status === 404) {
      note = 'Not Found (404)';
    }

    return { url, status, note };
  } catch (err) {
    return { url, status: 'ERROR', note: err.message };
  }
}

async function run() {
  const results = [];
  const sortedUrls = Array.from(urls).sort();

  for (const url of sortedUrls) {
    const res = await checkUrl(url);
    results.push(res);
  }

  console.log('| Status | URL | Assessment |');
  console.log('| :--- | :--- | :--- |');
  for (const r of results) {
    console.log(`| ${r.status} | ${r.url} | ${r.note} |`);
  }
}

run().catch(console.error);
