#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * replace-zero-byte-images.js
 * Replaces zero-byte files in public/images with placeholder_default.png bytes.
 *
 * Usage:
 *   node scripts/replace-zero-byte-images.js
 *
 * Behavior:
 *  - Reads placeholder_default.png
 *  - Scans public/images directory
 *  - For each file sized 0 bytes, overwrites content with placeholder bytes (keeps original filename)
 *  - Leaves non-zero files untouched
 *  - Prints summary to stdout and writes a summary report
 */
const fs = require('fs');
const path = require('path');

function main() {
  const root = path.resolve(__dirname, '..');
  const imagesDir = path.join(root, 'public', 'images');
  const placeholderPath = path.join(imagesDir, 'placeholder_default.png');
  const reportPath = path.join(root, 'public', 'images-replacement-report.txt');

  if (!fs.existsSync(placeholderPath)) {
    console.error('ERROR: placeholder_default.png not found at', placeholderPath);
    process.exit(1);
  }

  const placeholderBuf = fs.readFileSync(placeholderPath);
  if (!placeholderBuf || placeholderBuf.length === 0) {
    console.error('ERROR: placeholder_default.png is zero bytes.');
    process.exit(1);
  }

  if (!fs.existsSync(imagesDir) || !fs.statSync(imagesDir).isDirectory()) {
    console.error('ERROR: images directory not found at', imagesDir);
    process.exit(1);
  }

  const entries = fs.readdirSync(imagesDir);
  const replaced = [];
  const skipped = [];

  for (const name of entries) {
    const filePath = path.join(imagesDir, name);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        // ignore subdirs for now per requirement focus (same folder)
        continue;
      }
      if (name === 'placeholder_default.png') {
        skipped.push({ file: name, reason: 'placeholder file' });
        continue;
      }
      if (stat.size === 0) {
        fs.writeFileSync(filePath, placeholderBuf);
        replaced.push(name);
      } else {
        skipped.push({ file: name, reason: 'non-zero' });
      }
    } catch (err) {
      skipped.push({ file: name, reason: `error: ${err.message}` });
    }
  }

  const summaryLines = [];
  summaryLines.push('Zero-byte image replacement summary');
  summaryLines.push(`Images directory: ${imagesDir}`);
  summaryLines.push(`Placeholder: ${path.basename(placeholderPath)} (${placeholderBuf.length} bytes)`);
  summaryLines.push('');
  summaryLines.push(`Replaced files (${replaced.length}):`);
  for (const f of replaced) summaryLines.push(` - ${f}`);
  summaryLines.push('');
  summaryLines.push(`Unchanged files (${skipped.length}):`);
  for (const s of skipped) summaryLines.push(` - ${s.file} (${s.reason})`);
  summaryLines.push('');

  const summary = summaryLines.join('\n');
  // Print to console
  console.log(summary);
  // Persist a report
  fs.writeFileSync(reportPath, summary, 'utf8');
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error('Fatal error:', e);
    process.exit(1);
  }
}
