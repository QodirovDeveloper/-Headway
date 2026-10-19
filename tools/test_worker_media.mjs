import assert from 'node:assert';
import { serveMedia } from '../worker/media.js';

// Mock R2 object
class MockR2Object {
  constructor(size, range) {
    this.size = size;
    this.range = range;
    this.etag = '"mock-etag"';
    this.body = 'MOCK_STREAM_BODY';
  }
}

// Mock R2 Bucket
class MockR2Bucket {
  constructor() {
    this.files = {
      'beginner/cover.webp': { size: 56516, type: 'image/webp' },
      'beginner/pages/p001.webp': { size: 120000, type: 'image/webp' },
      'beginner/audio/T1.1.mp3': { size: 2500000, type: 'audio/mpeg' },
    };
  }

  async head(key) {
    const f = this.files[key];
    if (!f) return null;
    return { size: f.size, etag: '"mock-etag"' };
  }

  async get(key, options) {
    const f = this.files[key];
    if (!f) return null;

    if (options?.range) {
      if ('suffix' in options.range) {
        const len = options.range.suffix;
        return new MockR2Object(f.size, { offset: f.size - len, length: len });
      }
      if ('offset' in options.range) {
        const off = options.range.offset;
        const len = options.range.length === Infinity ? f.size - off : options.range.length;
        return new MockR2Object(f.size, { offset: off, length: len });
      }
    }
    return new MockR2Object(f.size, undefined);
  }
}

// Mock Env
const mockEnv = {
  HEADWAY_MEDIA: new MockR2Bucket(),
  DB: {
    prepare: () => ({
      bind: () => ({
        first: async () => ({ id: 1, username: 'student1', role: 'student', xp: 10, silver: 5 }),
      }),
    }),
  },
};

console.log('--- Testing worker/media.ts Handler ---');

async function runTests() {
  // Test 1: Unauthorized request (no cookie) -> 401
  {
    const req = new Request('http://localhost/beginner/pages/p001.webp');
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 401, 'Should return 401 without auth');
    console.log('✔ Test 1: Unauthenticated request rejected (401)');
  }

  // Helper with auth cookie
  const authCookie = 'hw_session=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';

  // Test 2: Full GET request -> 200 OK
  {
    const req = new Request('http://localhost/beginner/cover.webp', {
      headers: { Cookie: authCookie },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.headers.get('Content-Type'), 'image/webp');
    assert.strictEqual(res.headers.get('Accept-Ranges'), 'bytes');
    assert.strictEqual(res.headers.get('Cache-Control'), 'private, no-cache');
    console.log('✔ Test 2: Full GET request returns 200 OK with correct headers');
  }

  // Test 3: HEAD request -> 200 OK with headers and null body
  {
    const req = new Request('http://localhost/beginner/cover.webp', {
      method: 'HEAD',
      headers: { Cookie: authCookie },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.headers.get('Content-Type'), 'image/webp');
    assert.strictEqual(res.headers.get('Content-Length'), '56516');
    console.log('✔ Test 3: HEAD request returns 200 OK with Content-Length');
  }

  // Test 4: Audio Range request -> 206 Partial Content
  {
    const req = new Request('http://localhost/beginner/audio/T1.1.mp3', {
      headers: {
        Cookie: authCookie,
        Range: 'bytes=0-499',
      },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 206);
    assert.strictEqual(res.headers.get('Content-Type'), 'audio/mpeg');
    assert.strictEqual(res.headers.get('Content-Range'), 'bytes 0-499/2500000');
    assert.strictEqual(res.headers.get('Content-Length'), '500');
    console.log('✔ Test 4: Audio Range request returns 206 Partial Content');
  }

  // Test 5: Out of bounds Range -> 416 Range Not Satisfiable
  {
    const req = new Request('http://localhost/beginner/cover.webp', {
      headers: {
        Cookie: authCookie,
        Range: 'bytes=999999-1000000',
      },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 416);
    assert.strictEqual(res.headers.get('Content-Range'), 'bytes */56516');
    console.log('✔ Test 5: Out of bounds Range returns 416 Range Not Satisfiable');
  }

  // Test 6: Malformed Range -> 416 Range Not Satisfiable
  {
    const req = new Request('http://localhost/beginner/cover.webp', {
      headers: {
        Cookie: authCookie,
        Range: 'bytes=500-200',
      },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 416);
    console.log('✔ Test 6: Malformed Range returns 416');
  }

  // Test 7: Non-existent object -> 404
  {
    const req = new Request('http://localhost/beginner/pages/p999.webp', {
      headers: { Cookie: authCookie },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res.status, 404);
    console.log('✔ Test 7: Non-existent file returns 404 Not Found');
  }

  // Test 8: Security path traversal attempt -> null (falls through) or 404
  {
    const req = new Request('http://localhost/beginner/../../secret.txt', {
      headers: { Cookie: authCookie },
    });
    const res = await serveMedia(req, mockEnv, new URL(req.url));
    assert.strictEqual(res, null);
    console.log('✔ Test 8: Path traversal blocked (rejected by MEDIA_RE)');
  }

  console.log('\nAll 8 Worker media tests PASSED successfully!\n');
}

runTests().catch(err => {
  console.error('Test failure:', err);
  process.exit(1);
});
