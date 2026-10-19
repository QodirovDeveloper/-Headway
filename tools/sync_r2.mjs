import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const BUCKET = 'headway-media';
const LEVELS = ['beginner', 'elementary', 'pre-intermediate', 'intermediate', 'upper-intermediate'];
const MEDIA_DIR = 'D:/ikkinchi-miya/ikkinchi-miya/headway-4th/media';
const PROGRESS_FILE = 'D:/ikkinchi-miya/ikkinchi-miya/headway-4th/media/.upload_progress.json';
const CONCURRENCY = 6;
const MAX_RETRIES = 3;

// Load or initialize progress
let progress = { uploaded: {}, failed: {} };
if (existsSync(PROGRESS_FILE)) {
  try {
    progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  } catch (err) {
    console.warn('Could not read existing progress file, starting fresh.');
  }
}

function saveProgress() {
  try {
    writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  } catch (err) {
    console.error('Failed to save progress:', err.message);
  }
}

// Collect all files to upload
const allFiles = [];

for (const level of LEVELS) {
  const levelDir = join(MEDIA_DIR, level);

  // 1. Cover
  const coverPath = join(levelDir, 'cover.webp');
  if (existsSync(coverPath)) {
    allFiles.push({
      local: coverPath,
      key: `${level}/cover.webp`,
      contentType: 'image/webp',
      size: statSync(coverPath).size,
    });
  }

  // 2. Pages
  const pagesDir = join(levelDir, 'pages');
  if (existsSync(pagesDir)) {
    for (const file of readdirSync(pagesDir)) {
      if (file.endsWith('.webp')) {
        const fullPath = join(pagesDir, file);
        allFiles.push({
          local: fullPath,
          key: `${level}/pages/${file}`,
          contentType: 'image/webp',
          size: statSync(fullPath).size,
        });
      }
    }
  }

  // 3. Audio
  const audioDir = join(levelDir, 'audio');
  if (existsSync(audioDir)) {
    for (const file of readdirSync(audioDir)) {
      if (file.endsWith('.mp3')) {
        const fullPath = join(audioDir, file);
        allFiles.push({
          local: fullPath,
          key: `${level}/audio/${file}`,
          contentType: 'audio/mpeg',
          size: statSync(fullPath).size,
        });
      }
    }
  }
}

const totalCount = allFiles.length;
const totalBytes = allFiles.reduce((acc, f) => acc + f.size, 0);

console.log(`========================================`);
console.log(`Cloudflare R2 Media Upload for Headway 4th`);
console.log(`Target Bucket: ${BUCKET}`);
console.log(`Total Files Discovered: ${totalCount}`);
console.log(`Total Size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Concurrency: ${CONCURRENCY}`);
console.log(`========================================\n`);

// Filter pending files
const pendingFiles = allFiles.filter(f => !progress.uploaded[f.key]);
let completedCount = allFiles.length - pendingFiles.length;
let uploadedBytes = Object.values(progress.uploaded).reduce((acc, s) => acc + s, 0);

console.log(`Already uploaded previously: ${completedCount} files.`);
console.log(`Remaining to upload: ${pendingFiles.length} files.\n`);

async function uploadFileWithRetry(fileItem) {
  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    attempt++;
    try {
      const escapedLocal = `"${fileItem.local.replace(/"/g, '\\"')}"`;
      const cmd = `npx wrangler r2 object put "${BUCKET}/${fileItem.key}" --file ${escapedLocal} --content-type "${fileItem.contentType}" --remote`;
      await execAsync(cmd, { cwd: 'D:/ikkinchi-miya/ikkinchi-miya/headway-4th', timeout: 60000 });

      progress.uploaded[fileItem.key] = fileItem.size;
      delete progress.failed[fileItem.key];
      completedCount++;
      uploadedBytes += fileItem.size;

      const pct = ((completedCount / totalCount) * 100).toFixed(1);
      const mb = (uploadedBytes / 1024 / 1024).toFixed(1);
      console.log(`[${completedCount}/${totalCount}] (${pct}%) ${mb}MB - OK: ${fileItem.key}`);

      if (completedCount % 20 === 0) {
        saveProgress();
      }
      return true;
    } catch (err) {
      console.warn(`[Attempt ${attempt}/${MAX_RETRIES} FAIL] ${fileItem.key}: ${err.message?.split('\n')[0]}`);
      if (attempt >= MAX_RETRIES) {
        progress.failed[fileItem.key] = err.message;
        saveProgress();
        return false;
      }
      // Brief pause before retry
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
  return false;
}

// Worker pool for concurrency
async function runPool() {
  let index = 0;
  const workers = Array.from({ length: CONCURRENCY }, async (_, workerId) => {
    while (index < pendingFiles.length) {
      const currentIndex = index++;
      const item = pendingFiles[currentIndex];
      await uploadFileWithRetry(item);
    }
  });

  await Promise.all(workers);
  saveProgress();

  const failedCount = Object.keys(progress.failed).length;
  console.log(`\n========================================`);
  console.log(`Upload Complete Summary:`);
  console.log(`Total Files: ${totalCount}`);
  console.log(`Successfully Uploaded: ${completedCount}`);
  console.log(`Failed Files: ${failedCount}`);
  console.log(`========================================\n`);

  if (failedCount > 0) {
    console.error('Failed items:');
    for (const key of Object.keys(progress.failed)) {
      console.error(` - ${key}: ${progress.failed[key]}`);
    }
    process.exit(1);
  }
}

runPool().catch(err => {
  console.error('Fatal upload error:', err);
  process.exit(1);
});
