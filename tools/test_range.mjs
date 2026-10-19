import assert from 'node:assert';

function parseRange(header) {
  const m = header.match(/^bytes=(\d*)-(\d*)$/);
  if (!m) return undefined;
  const [, startStr, endStr] = m;

  if (!startStr && endStr) return { suffix: Number(endStr) };

  const start = Number(startStr);
  if (!endStr) return { offset: start, length: Infinity };

  const end = Number(endStr);
  if (end < start) return undefined;
  return { offset: start, length: end - start + 1 };
}

// Test range parsing
assert.deepStrictEqual(parseRange('bytes=0-499'), { offset: 0, length: 500 });
assert.deepStrictEqual(parseRange('bytes=500-'), { offset: 500, length: Infinity });
assert.deepStrictEqual(parseRange('bytes=-500'), { suffix: 500 });
assert.strictEqual(parseRange('bytes=500-200'), undefined);
assert.strictEqual(parseRange('invalid'), undefined);

console.log('All Range header unit tests PASSED successfully!');
