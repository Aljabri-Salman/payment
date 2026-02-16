import { TTLCache } from "./cache";

interface TestResult {
  test: string;
  passed: boolean;
  message: string;
  durationMs?: number;
}

const results: TestResult[] = [];

function test(name: string, fn: () => void | Promise<void>): Promise<void> {
  return Promise.resolve(fn())
    .then(() => {
      results.push({ test: name, passed: true, message: "OK" });
      console.log(`✅ ${name}`);
    })
    .catch((err) => {
      results.push({ test: name, passed: false, message: String(err) });
      console.log(`❌ ${name}: ${err}`);
    });
}

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

function assertEqual<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function getMemoryUsage(): number {
  if (typeof process !== "undefined" && process.memoryUsage) {
    return process.memoryUsage().heapUsed;
  }
  return 0;
}

// Basic functionality tests
async function runBasicTests() {
  console.log("\n📋 Basic Functionality Tests\n");

  await test("set and get value", () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 10000);
    assertEqual(cache.get("key1"), "value1");
  });

  await test("get returns undefined for non-existent key", () => {
    const cache = new TTLCache<string, string>();
    assertEqual(cache.get("nonexistent"), undefined);
  });

  await test("has returns true for existing key", () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 10000);
    assertEqual(cache.has("key1"), true);
  });

  await test("has returns false for non-existent key", () => {
    const cache = new TTLCache<string, string>();
    assertEqual(cache.has("nonexistent"), false);
  });

  await test("remove deletes entry", () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 10000);
    cache.remove("key1");
    assertEqual(cache.get("key1"), undefined);
  });

  await test("clear removes all entries", () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 10000);
    cache.set("key2", "value2", 10000);
    cache.clear();
    assertEqual(cache.size, 0);
  });

  await test("size returns correct count", () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 10000);
    cache.set("key2", "value2", 10000);
    cache.set("key3", "value3", 10000);
    assertEqual(cache.size, 3);
  });

  await test("TTL expiration works", async () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 50); // 50ms TTL
    assertEqual(cache.get("key1"), "value1");
    await new Promise((r) => setTimeout(r, 100));
    assertEqual(cache.get("key1"), undefined);
  });

  await test("cleanup removes expired entries", async () => {
    const cache = new TTLCache<string, string>();
    cache.set("key1", "value1", 50);
    cache.set("key2", "value2", 10000);
    await new Promise((r) => setTimeout(r, 100));
    const removed = cache.cleanup();
    assertEqual(removed, 1);
    assertEqual(cache.size, 1);
  });
}

// Capacity and performance tests
async function runCapacityTests() {
  console.log("\n📊 Capacity & Performance Tests\n");

  // Test with different value sizes
  const valueSizes = [
    { name: "small (100 bytes)", size: 100 },
    { name: "medium (1 KB)", size: 1024 },
    { name: "large (10 KB)", size: 10 * 1024 },
    { name: "xlarge (100 KB)", size: 100 * 1024 },
  ];

  for (const { name, size } of valueSizes) {
    await test(`capacity test with ${name} values`, () => {
      const cache = new TTLCache<number, string>();
      const value = "x".repeat(size);
      const startMem = getMemoryUsage();
      const startTime = Date.now();

      let count = 0;
      const targetCount = 10000; // Insert 10k entries

      try {
        for (let i = 0; i < targetCount; i++) {
          cache.set(i, value, 60000);
          count++;
        }
      } catch (e) {
        console.log(`  ⚠️ Stopped at ${count} entries: ${e}`);
      }

      const endMem = getMemoryUsage();
      const endTime = Date.now();
      const memUsed = endMem - startMem;

      console.log(`  📈 Inserted: ${count.toLocaleString()} entries`);
      console.log(`  💾 Memory used: ${formatBytes(memUsed)}`);
      console.log(`  ⏱️ Time: ${endTime - startTime}ms`);
      console.log(`  📍 Per entry: ~${formatBytes(Math.round(memUsed / count))}`);

      cache.clear();
    });
  }
}

// Stress test to find maximum capacity
async function runStressTest() {
  console.log("\n🔥 Maximum Capacity Stress Test\n");

  const cache = new TTLCache<number, object>();
  const sampleObject = {
    _id: "abc123xyz",
    name: "Test Merchant Name",
    status: "ACTIVE" as const,
    createdAt: Date.now(),
    metadata: { foo: "bar", count: 42 },
  };

  const startMem = getMemoryUsage();
  const startTime = Date.now();
  let count = 0;
  let lastLogCount = 0;
  const logInterval = 100000;

  console.log("  Inserting entries (logging every 100k)...\n");

  try {
    // Try to insert up to 10 million entries
    for (let i = 0; i < 10_000_000; i++) {
      cache.set(i, { ...sampleObject, _id: `id_${i}` }, 60000);
      count++;

      if (count - lastLogCount >= logInterval) {
        const currentMem = getMemoryUsage();
        const elapsed = Date.now() - startTime;
        console.log(
          `  ${(count / 1000).toFixed(0)}k entries | ` +
            `Memory: ${formatBytes(currentMem - startMem)} | ` +
            `Rate: ${((count / elapsed) * 1000).toFixed(0)}/sec`
        );
        lastLogCount = count;
      }
    }
  } catch (e) {
    console.log(`\n  ⚠️ Stopped at ${count.toLocaleString()} entries`);
    console.log(`  Error: ${e}`);
  }

  const endMem = getMemoryUsage();
  const endTime = Date.now();
  const totalMem = endMem - startMem;
  const totalTime = endTime - startTime;

  console.log("\n  ═══════════════════════════════════════");
  console.log(`  📊 RESULTS`);
  console.log("  ═══════════════════════════════════════");
  console.log(`  Total entries:     ${count.toLocaleString()}`);
  console.log(`  Total memory:      ${formatBytes(totalMem)}`);
  console.log(`  Memory per entry:  ~${formatBytes(Math.round(totalMem / count))}`);
  console.log(`  Total time:        ${totalTime}ms`);
  console.log(`  Insert rate:       ${((count / totalTime) * 1000).toFixed(0)} entries/sec`);
  console.log("  ═══════════════════════════════════════\n");

  // Test read performance
  console.log("  Testing read performance...");
  const readStart = Date.now();
  const readCount = Math.min(count, 100000);
  for (let i = 0; i < readCount; i++) {
    cache.get(i);
  }
  const readTime = Date.now() - readStart;
  console.log(
    `  Read ${readCount.toLocaleString()} entries in ${readTime}ms ` +
      `(${((readCount / readTime) * 1000).toFixed(0)} reads/sec)\n`
  );

  cache.clear();
}

// Run all tests
async function main() {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║       TTLCache Performance Tests       ║");
  console.log("╚═══════════════════════════════════════╝");

  await runBasicTests();
  await runCapacityTests();
  await runStressTest();

  // Summary
  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;

  console.log("\n═══════════════════════════════════════");
  console.log(`Summary: ${passed} passed, ${failed} failed`);
  console.log("═══════════════════════════════════════\n");

  if (failed > 0) {
    console.log("Failed tests:");
    results.filter((r) => !r.passed).forEach((r) => console.log(`  - ${r.test}: ${r.message}`));
    process.exit(1);
  }
}

main();
