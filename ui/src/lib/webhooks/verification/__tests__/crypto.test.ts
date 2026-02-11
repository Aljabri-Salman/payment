/**
 * Unit tests for webhook verification crypto utilities
 * 
 * Run with: npm test or your test runner
 */

import {
  constantTimeCompare,
  computeHmacSha256,
  validateInputs,
  isTimestampValid,
  bufferToHex,
} from "../crypto";

/**
 * Test constantTimeCompare
 */
export async function testConstantTimeCompare() {
  console.log("\n=== Testing constantTimeCompare ===");

  const tests = [
    { a: "abc123", b: "abc123", expected: true, name: "identical strings" },
    { a: "abc123", b: "abc124", expected: false, name: "different last char" },
    { a: "abc123", b: "xyz123", expected: false, name: "different first chars" },
    { a: "short", b: "longer", expected: false, name: "different lengths" },
    { a: "", b: "", expected: true, name: "empty strings" },
    { 
      a: "a".repeat(1000), 
      b: "a".repeat(1000), 
      expected: true, 
      name: "long identical strings" 
    },
    {
      a: "a".repeat(999) + "b",
      b: "a".repeat(999) + "c",
      expected: false,
      name: "long strings different at end"
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    const result = constantTimeCompare(test.a, test.b);
    if (result === test.expected) {
      console.log(`✅ PASS: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${test.name} - expected ${test.expected}, got ${result}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

/**
 * Test computeHmacSha256
 */
export async function testComputeHmacSha256() {
  console.log("\n=== Testing computeHmacSha256 ===");

  const tests = [
    {
      data: "test message",
      secret: "secret key",
      name: "basic HMAC",
    },
    {
      data: "1234567890.{\"event\":\"test\"}",
      secret: "whsec_test_secret",
      name: "Stripe-like payload",
    },
    {
      data: "",
      secret: "secret",
      name: "empty data",
    },
    {
      data: "data",
      secret: "",
      name: "empty secret",
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    try {
      const signature = await computeHmacSha256(test.data, test.secret);
      
      // Verify it's a hex string
      if (!/^[0-9a-f]{64}$/.test(signature)) {
        console.log(`❌ FAIL: ${test.name} - invalid hex format: ${signature}`);
        failed++;
        continue;
      }

      // Verify consistency
      const signature2 = await computeHmacSha256(test.data, test.secret);
      if (signature !== signature2) {
        console.log(`❌ FAIL: ${test.name} - inconsistent results`);
        failed++;
        continue;
      }

      console.log(`✅ PASS: ${test.name} - signature: ${signature.substring(0, 16)}...`);
      passed++;
    } catch (error) {
      console.log(`❌ FAIL: ${test.name} - error: ${error}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

/**
 * Test validateInputs
 */
export async function testValidateInputs() {
  console.log("\n=== Testing validateInputs ===");

  const tests = [
    {
      inputs: { a: "hello", b: "world" },
      expected: true,
      name: "valid strings",
    },
    {
      inputs: { a: "", b: "world" },
      expected: false,
      name: "empty string",
    },
    {
      inputs: { a: "hello", b: null },
      expected: false,
      name: "null value",
    },
    {
      inputs: { a: "hello", b: undefined },
      expected: false,
      name: "undefined value",
    },
    {
      inputs: { a: "hello", b: 123 },
      expected: false,
      name: "number value",
    },
    {
      inputs: {},
      expected: true,
      name: "empty object",
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    const result = validateInputs(test.inputs);
    if (result === test.expected) {
      console.log(`✅ PASS: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${test.name} - expected ${test.expected}, got ${result}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

/**
 * Test isTimestampValid
 */
export async function testIsTimestampValid() {
  console.log("\n=== Testing isTimestampValid ===");

  const now = Math.floor(Date.now() / 1000);
  
  const tests = [
    {
      timestamp: now,
      tolerance: 300,
      expected: true,
      name: "current timestamp",
    },
    {
      timestamp: now - 100,
      tolerance: 300,
      expected: true,
      name: "100 seconds ago (within tolerance)",
    },
    {
      timestamp: now + 100,
      tolerance: 300,
      expected: true,
      name: "100 seconds in future (within tolerance)",
    },
    {
      timestamp: now - 400,
      tolerance: 300,
      expected: false,
      name: "400 seconds ago (out of tolerance)",
    },
    {
      timestamp: now + 400,
      tolerance: 300,
      expected: false,
      name: "400 seconds in future (out of tolerance)",
    },
    {
      timestamp: now,
      tolerance: 0,
      expected: true,
      name: "exact match with zero tolerance",
    },
    {
      timestamp: now - 1,
      tolerance: 0,
      expected: false,
      name: "1 second difference with zero tolerance",
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    const result = isTimestampValid(test.timestamp, test.tolerance);
    if (result === test.expected) {
      console.log(`✅ PASS: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${test.name} - expected ${test.expected}, got ${result}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

/**
 * Test bufferToHex
 */
export async function testBufferToHex() {
  console.log("\n=== Testing bufferToHex ===");

  const tests = [
    {
      buffer: new Uint8Array([0x00, 0x01, 0x02, 0xff]).buffer,
      expected: "000102ff",
      name: "basic conversion",
    },
    {
      buffer: new Uint8Array([]).buffer,
      expected: "",
      name: "empty buffer",
    },
    {
      buffer: new Uint8Array([0xde, 0xad, 0xbe, 0xef]).buffer,
      expected: "deadbeef",
      name: "hex bytes",
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    const result = bufferToHex(test.buffer);
    if (result === test.expected) {
      console.log(`✅ PASS: ${test.name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${test.name} - expected ${test.expected}, got ${result}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

/**
 * Run all tests
 */
export async function runAllTests() {
  console.log("Starting webhook verification crypto utility tests...\n");

  const results = {
    constantTimeCompare: await testConstantTimeCompare(),
    computeHmacSha256: await testComputeHmacSha256(),
    validateInputs: await testValidateInputs(),
    isTimestampValid: await testIsTimestampValid(),
    bufferToHex: await testBufferToHex(),
  };

  console.log("\n=== OVERALL RESULTS ===");
  let totalPassed = 0;
  let totalFailed = 0;

  for (const [name, result] of Object.entries(results)) {
    console.log(`${name}: ${result.passed} passed, ${result.failed} failed`);
    totalPassed += result.passed;
    totalFailed += result.failed;
  }

  console.log(`\nTOTAL: ${totalPassed} passed, ${totalFailed} failed`);
  console.log(totalFailed === 0 ? "✅ All tests passed!" : "❌ Some tests failed");

  return { totalPassed, totalFailed };
}

// Uncomment to run tests:
// runAllTests();
