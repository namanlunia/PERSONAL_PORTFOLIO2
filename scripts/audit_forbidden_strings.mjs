import fs from 'fs';
import path from 'path';

const forbiddenTerms = [
  'To be added',
  'Link coming soon',
  'TBA',
  'Lorem',
  'placeholder',
  'Designer + Developer',
  'Open to selected',
  '86%',
  '78%',
  'Project One',
  'Certificate title',
  'John Doe'
];

const targetDirs = ['app', 'components', 'content', 'out'];

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== '_next' && f !== 'node_modules') {
        walk(full, fileList);
      }
    } else {
      if (
        f.endsWith('.ts') ||
        f.endsWith('.tsx') ||
        f.endsWith('.js') ||
        f.endsWith('.jsx') ||
        f.endsWith('.html') ||
        f.endsWith('.txt')
      ) {
        fileList.push(full);
      }
    }
  }
  return fileList;
}

let hits = 0;

for (const dir of targetDirs) {
  const files = walk(dir);
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const term of forbiddenTerms) {
      // Use word boundary for short abbreviations like TBA, case-insensitive for others
      const pattern = term === 'TBA' ? '\\bTBA\\b' : term;
      const regex = new RegExp(pattern, 'gi');
      let m;
      while ((m = regex.exec(content)) !== null) {
        console.error(`FORBIDDEN HIT in ${file}: "${m[0]}" at position ${m.index}`);
        hits++;
      }
    }
  }
}

if (hits === 0) {
  console.log('✓ AUDIT PASSED: Zero forbidden string hits in source and built output!');
  process.exit(0);
} else {
  console.error(`✗ AUDIT FAILED: Found ${hits} forbidden string hit(s)!`);
  process.exit(1);
}
