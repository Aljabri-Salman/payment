#!/usr/bin/env bun

/**
 * Test script for encryption utilities
 * 
 * Run with: bun run scripts/test-encryption.ts
 * 
 * This script tests:
 * - Basic encryption/decryption
 * - Multiple encryptions produce different outputs
 * - Tamper detection
 * - Error handling
 * 
 * Note: Set ENCRYPTION_SECRET_KEY environment variable before running:
 *   export ENCRYPTION_SECRET_KEY=$(bunx convex env get ENCRYPTION_SECRET_KEY)
 *   bun run scripts/test-encryption.ts
 */

// Check if encryption key is set
if (!process.env.ENCRYPTION_SECRET_KEY) {
  console.error("❌ ENCRYPTION_SECRET_KEY environment variable not set!");
  console.error("\nTo run this test, first set the environment variable:");
  console.error("  On Unix/Mac/WSL:");
  console.error("    export ENCRYPTION_SECRET_KEY=$(bunx convex env get ENCRYPTION_SECRET_KEY)");
  console.error("    bun run scripts/test-encryption.ts");
  console.error("\n  On Windows PowerShell:");
  console.error("    $env:ENCRYPTION_SECRET_KEY=$(bunx convex env get ENCRYPTION_SECRET_KEY)");
  console.error("    bun run scripts/test-encryption.ts");
  console.error("\n  On Windows CMD:");
  console.error("    FOR /F %i IN ('bunx convex env get ENCRYPTION_SECRET_KEY') DO SET ENCRYPTION_SECRET_KEY=%i");
  console.error("    bun run scripts/test-encryption.ts");
  process.exit(1);
}

import { encrypt, decrypt } from "../convex/lib/encryption";

(async () => {
  console.log("🔐 Testing Encryption Utilities\n");
  console.log("=".repeat(60));

  // Test 1: Basic encryption and decryption
  console.log("\n📝 Test 1: Basic Encryption/Decryption");
  const testSecret = "whsec_stripe_abc123xyz789";
  const encrypted = await encrypt(testSecret);
  const decrypted = await decrypt(encrypted);

  console.log(`Original:  ${testSecret}`);
  console.log(`Encrypted: ${encrypted.substring(0, 50)}...`);
  console.log(`Decrypted: ${decrypted}`);
  console.log(`✅ Match:  ${testSecret === decrypted ? "YES" : "NO"}`);

  // Test 2: Same input produces different encrypted outputs
  console.log("\n📝 Test 2: Encryption Randomness");
  const encrypted1 = await encrypt(testSecret);
  const encrypted2 = await encrypt(testSecret);
  const encrypted3 = await encrypt(testSecret);

  console.log(`Encryption 1: ${encrypted1.substring(0, 40)}...`);
  console.log(`Encryption 2: ${encrypted2.substring(0, 40)}...`);
  console.log(`Encryption 3: ${encrypted3.substring(0, 40)}...`);
  console.log(`✅ All different: ${encrypted1 !== encrypted2 && encrypted2 !== encrypted3 ? "YES" : "NO"}`);
  console.log(`✅ All decrypt correctly: ${await decrypt(encrypted1) === testSecret && await decrypt(encrypted2) === testSecret ? "YES" : "NO"}`);

  // Test 3: Tamper detection
  console.log("\n📝 Test 3: Tamper Detection");
  try {
    const tamperedData = encrypted.substring(0, encrypted.length - 5) + "XXXXX";
    await decrypt(tamperedData);
    console.log("❌ FAILED: Tampered data should throw error");
  } catch (error) {
    console.log("✅ PASSED: Tampered data detected");
    console.log(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  // Test 4: Invalid base64
  console.log("\n📝 Test 4: Invalid Data Handling");
  try {
    await decrypt("not-valid-base64-!@#$%");
    console.log("❌ FAILED: Invalid data should throw error");
  } catch (error) {
    console.log("✅ PASSED: Invalid data rejected");
    console.log(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  // Test 5: Different data types
  console.log("\n📝 Test 5: Different Secret Types");
  const testCases = [
    { name: "Webhook Secret", value: "whsec_test_abc123xyz" },
    { name: "PayPal Key", value: "AaBbCcDdEeFfGgHh1234567890" },
    { name: "API Token", value: "test_token_1234567890abcdefghijklmnop" },
    { name: "Short Secret", value: "secret" },
    { name: "Long Secret", value: "a".repeat(500) },
    { name: "Special Chars", value: "test!@#$%^&*()_+-=[]{}|;:',.<>?/" },
    { name: "Unicode", value: "مرحبا 你好 🔐💰" },
  ];

  let allPassed = true;
  for (const testCase of testCases) {
    const enc = await encrypt(testCase.value);
    const dec = await decrypt(enc);
    const passed = dec === testCase.value;
    console.log(`   ${passed ? "✅" : "❌"} ${testCase.name}: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) allPassed = false;
  }

  // Test 6: Performance
  console.log("\n📝 Test 6: Performance");
  const iterations = 1000;
  const startEncrypt = performance.now();
  for (let i = 0; i < iterations; i++) {
    await encrypt(testSecret);
  }
  const encryptTime = performance.now() - startEncrypt;

  const startDecrypt = performance.now();
  for (let i = 0; i < iterations; i++) {
    await decrypt(encrypted);
  }
  const decryptTime = performance.now() - startDecrypt;

  console.log(`   ${iterations} encryptions: ${encryptTime.toFixed(2)}ms (${(encryptTime / iterations).toFixed(3)}ms each)`);
  console.log(`   ${iterations} decryptions: ${decryptTime.toFixed(2)}ms (${(decryptTime / iterations).toFixed(3)}ms each)`);

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log(`\n✅ All tests ${allPassed ? "PASSED" : "FAILED"}!\n`);
})();
