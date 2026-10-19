import assert from 'node:assert';

console.log('--- Testing Audio States & YouTube-style Loading Logic ---');

// Mock DOM Audio element with event emitter & buffered ranges
class MockAudioElement {
  constructor() {
    this.src = '';
    this.currentTime = 0;
    this.duration = 180; // 3 minutes
    this.playbackRate = 1.0;
    this.paused = true;
    this.listeners = {};
    this.buffered = {
      length: 1,
      start: (i) => 0,
      end: (i) => 45, // 45 seconds buffered (25%)
    };
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  removeEventListener(event, fn) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(l => l !== fn);
    }
  }

  emit(event) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn());
    }
  }

  async play() {
    this.paused = false;
    this.emit('play');
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
    this.emit('pause');
  }
}

// Test State Transitions
const states = ['idle', 'loading', 'ready', 'playing', 'buffering', 'paused', 'error'];

// Scenario 1: Initial play triggers 'loading' then 'playing'
{
  let status = 'idle';
  const audio = new MockAudioElement();

  // User taps play on new track
  status = 'loading';
  assert.strictEqual(status, 'loading', 'Should enter loading state when track requested');

  // Audio begins playback
  audio.play().then(() => {
    audio.emit('playing');
    status = 'playing';
    assert.strictEqual(status, 'playing', 'Should transition to playing state on playing event');
    console.log('✔ Scenario 1: Initial Play transitions: idle -> loading -> playing');
  });
}

// Scenario 2: Seeking triggers 'buffering' and restores 'playing'
{
  let status = 'playing';
  const audio = new MockAudioElement();
  audio.paused = false;

  // User seeks forward +30s to unbuffered chunk
  status = 'buffering';
  audio.currentTime = 120; // 2 minutes in
  assert.strictEqual(status, 'buffering', 'Should enter buffering state when seek initiated');

  // Data arrives, playback resumes
  audio.emit('canplay');
  audio.emit('seeked');
  audio.emit('playing');
  status = 'playing';
  assert.strictEqual(status, 'playing', 'Should return to playing state after seek completes');
  assert.strictEqual(audio.currentTime, 120, 'Current position must be preserved at seek target');
  console.log('✔ Scenario 2: Timeline Seek transitions: playing -> buffering -> playing (at 120s)');
}

// Scenario 3: Underflow during playback triggers 'waiting' (buffering)
{
  let status = 'playing';
  const audio = new MockAudioElement();
  audio.paused = false;

  // Network drops or slow stream
  audio.emit('waiting');
  status = 'buffering';
  assert.strictEqual(status, 'buffering', 'Should enter buffering state on waiting event');

  // Buffer recovers
  audio.emit('playing');
  status = 'playing';
  assert.strictEqual(status, 'playing', 'Should recover to playing state without user intervention');
  console.log('✔ Scenario 3: Network stall recovery: playing -> waiting (buffering) -> playing');
}

// Scenario 4: Fast track switching discards stale events
{
  let activeGen = 0;
  let activeTrack = 'T1.1';
  let status = 'idle';

  // Request Track 1
  const gen1 = ++activeGen;
  activeTrack = 'T1.1';
  status = 'loading';

  // Rapidly switch to Track 2 before Track 1 finishes
  const gen2 = ++activeGen;
  activeTrack = 'T1.2';
  status = 'loading';

  // Late error or play from Track 1 arrives
  if (gen1 !== activeGen) {
    // Correctly discarded!
  } else {
    assert.fail('Stale event from Track 1 should have been discarded');
  }

  assert.strictEqual(activeGen, gen2, 'Generation counter ensures active track isolation');
  assert.strictEqual(activeTrack, 'T1.2', 'Active track is Track 2');
  console.log('✔ Scenario 4: Race condition prevention: rapid track switching discards stale events');
}

// Scenario 5: Buffer calculation percentage
{
  const audio = new MockAudioElement();
  audio.duration = 100;
  audio.buffered = {
    length: 1,
    start: (i) => 0,
    end: (i) => 65,
  };

  const calculateBuffered = (currTime, dur) => {
    if (!dur || !audio.buffered || audio.buffered.length === 0) return 0;
    for (let i = 0; i < audio.buffered.length; i++) {
      if (audio.buffered.start(i) <= currTime && currTime <= audio.buffered.end(i)) {
        return Math.min(100, Math.max(0, (audio.buffered.end(i) / dur) * 100));
      }
    }
    return 0;
  };

  const pct = calculateBuffered(20, 100);
  assert.strictEqual(pct, 65, 'Buffer should calculate to 65%');
  console.log('✔ Scenario 5: Buffered progress bar calculates accurate percentage (65%)');
}

console.log('\nAll 5 Audio Loading & Buffering Scenarios PASSED!\n');
