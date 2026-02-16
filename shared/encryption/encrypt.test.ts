/**
 * Unit tests for encryption utilities
 * 
 * Run with: bun run shared/encryption/encrypt.test.ts
 */

import { encrypt, decrypt, rotateIfNeeded } from "./encrypt";


function getEnvKey(): string {
  const key = process.env.ENCRYPTION_SECRET_KEY;
  console.log("Retrieved ENCRYPTION_SECRET_KEY from environment:", key);
  if (!key) throw new Error("ENCRYPTION_SECRET_KEY is not set");
  return key;
}



function testRotateIfNeeded() {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const plaintext = "Rotate me if needed!";
      console.log("Original plaintext:", plaintext);
      const encrypted = await encrypt(plaintext);
      console.log("Original encrypted data:", encrypted);
      const rotated = await rotateIfNeeded(encrypted);
      console.log("Rotated encrypted data:", rotated);
      const decrypted = await decrypt(rotated);
      console.log("Decrypted after rotation:", decrypted);
      assertEqual(decrypted, plaintext, "Decrypted text after rotation should match original plaintext");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}



function assertEqual(actual: string, expected: string, message: string) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: ${message}\nExpected: ${expected}\nActual: ${actual}`);
  }
}
function assertNotEqual(actual: string, expected: string, message: string) {
  if (actual === expected) {
    throw new Error(`Assertion failed: ${message}\nExpected not to be: ${expected}`);
  }
}
function testEncryptDecrypt() {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const plaintext = "Hello, World!";
      console.log("Original plaintext:", plaintext);
      const encrypted = await encrypt(plaintext);
      console.log("Encrypted data:", encrypted);
      const decrypted = await decrypt(encrypted);
      console.log("Decrypted data:", decrypted);
      assertEqual(decrypted, plaintext, "Decrypted text should match original plaintext");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


async function runAllTests() {
  await testEncryptDecrypt().then(() => console.log("testEncryptDecrypt passed"))
    .catch((error) => {
      console.error("testEncryptDecrypt failed:", error);
      process.exit(1);
    });
  await testRotateIfNeeded().then(() => console.log("testRotateIfNeeded passed"))
    .catch((error) => {
      console.error("testRotateIfNeeded failed:", error);
      process.exit(1);
    });
}

async function testDecryptionSecretMismatch() {
  try {
    const plaintext = "AnYx/IQ1mhvwsC3oaMlI8IoD/YzQfnyKdqeCYYIL+uoe4QoZsAaz9ZNYHxQdcQsNutRNH860D+P6Sxi9xd9/Z8llCutA0Ue0TakKeOyHbufp9EqmmMEr2FVip37M";
    console.log("encrypted:", plaintext);
    const encrypted = await decrypt(plaintext);
    console.log("Decrypted data:", encrypted);
  } catch (error) {
    console.log("Expected decryption failure occurred:", error);
  }
}

if (require.main === module) {
  await testDecryptionSecretMismatch();
  // getEnvKey();
  // runAllTests();
}

export {
  getEnvKey
}