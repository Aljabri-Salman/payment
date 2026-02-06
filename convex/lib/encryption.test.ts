import { encrypt, decrypt, needsRotation } from './encryption';

/**
 * Run tests - must be called from a Convex action/mutation
 */
export async function runTests() {
  console.log('🔐 Testing Web Crypto Encryption\n');
  console.log('='.repeat(50));

  // Test 1: Basic encryption and decryption
  console.log('\n✅ Test 1: Basic encryption/decryption');
  const secret = 'sk_test_hyperpay_merchant_secret_key_12345';
  console.log('Original:', secret);

  const encrypted = await encrypt(secret);
  console.log('Encrypted:', encrypted);
  console.log('Encrypted length:', encrypted.length, 'characters');

  const decrypted = await decrypt(encrypted);
  console.log('Decrypted:', decrypted);
  console.log('Match:', secret === decrypted ? '✓ YES' : '✗ NO');

  // Test 2: Different inputs produce different outputs
  console.log('\n✅ Test 2: Same text encrypts differently each time');
  const text = 'webhook_secret_123';
  const encrypted1 = await encrypt(text);
  const encrypted2 = await encrypt(text);
  console.log('Encrypted 1:', encrypted1.substring(0, 30) + '...');
  console.log('Encrypted 2:', encrypted2.substring(0, 30) + '...');
  console.log('Different outputs:', encrypted1 !== encrypted2 ? '✓ YES (Good!)' : '✗ NO (Bad!)');
  const dec1 = await decrypt(encrypted1);
  const dec2 = await decrypt(encrypted2);
  console.log('Both decrypt correctly:', dec1 === text && dec2 === text ? '✓ YES' : '✗ NO');

  // Test 3: Various data types
  console.log('\n✅ Test 3: Various merchant secrets');
  const testCases = [
    'simple',
    'webhook_secret_with_special_chars!@#$%',
    'very_long_secret_key_' + 'x'.repeat(100),
    '{"api_key": "sk_test_123", "webhook": "whsec_456"}', // JSON string
    'émoji_test_🔐🔑🛡️',
  ];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const enc = await encrypt(testCase);
    const dec = await decrypt(enc);
    const match = testCase === dec;
    console.log(`  ${i + 1}. ${match ? '✓' : '✗'} Length: ${testCase.length} chars`);
  }

  // Test 4: Tampering detection
  console.log('\n✅ Test 4: Tampering detection');
  try {
    const encrypted = await encrypt('sensitive_data');
    // Modify the encrypted data (simulate tampering)
    const tampered = encrypted.slice(0, -5) + 'XXXXX';
    await decrypt(tampered);
    console.log('✗ FAILED - Tampering was not detected!');
  } catch (error) {
    console.log('✓ SUCCESS - Tampering detected and rejected');
    console.log('  Error:', (error as Error).message);
  }

  // Test 5: Performance test
  console.log('\n✅ Test 5: Performance test');
  const iterations = 100;
  const testData = 'webhook_secret_for_merchant_12345';

  const encStart = Date.now();
  for (let i = 0; i < iterations; i++) {
    await encrypt(testData);
  }
  const encTime = Date.now() - encStart;
  console.log(`  ${iterations} encryptions: ${encTime}ms (${(encTime/iterations).toFixed(2)}ms avg)`);

  const encryptedData = await encrypt(testData);
  const decStart = Date.now();
  for (let i = 0; i < iterations; i++) {
    await decrypt(encryptedData);
  }
  const decTime = Date.now() - decStart;
  console.log(`  ${iterations} decryptions: ${decTime}ms (${(decTime/iterations).toFixed(2)}ms avg)`);

  console.log('\n' + '='.repeat(50));
  console.log('✅ All tests completed!\n');
}
