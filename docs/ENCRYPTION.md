# Encryption System

Secure encryption utilities for protecting sensitive data (webhook secrets, API keys) using AES-256-GCM authenticated encryption with support for key rotation.

## Features

- ✅ **AES-256-GCM encryption** - Military-grade security with authentication
- ✅ **Key rotation support** - Seamlessly rotate keys without data loss
- ✅ **Tamper detection** - Automatically detects and rejects modified data
- ✅ **Zero-copy optimization** - Keys decoded once at module load
- ✅ **Comprehensive documentation** - Clear inline docs and examples

## Quick Start

### 1. Generate Encryption Key

```bash
# Generate a secure 32-byte key encoded as base64
bunx convex env set ENCRYPTION_SECRET_KEY=$(openssl rand -base64 32)
```

### 2. Use in Your Code

```typescript
import { encrypt, decrypt } from "./lib/encryption";

// Encrypt sensitive data
const encrypted = encrypt("whsec_stripe_secret_abc123");
// Store encrypted in database

// Decrypt when needed
const secret = decrypt(encrypted);
// Use secret to verify webhook signatures
```

## How It Works

### Encryption Process

```
Plain Text: "whsec_abc123"
     ↓
1. Generate random IV (12 bytes)
2. Encrypt with AES-256-GCM
3. Get authentication tag (16 bytes)
4. Package: [KeyID] + [IV] + [Tag] + [Ciphertext]
     ↓
Base64: "AYAB...encrypted_data..."
```

### Decryption Process

```
Base64: "AYAB...encrypted_data..."
     ↓
1. Decode from base64
2. Extract key version, IV, tag, ciphertext
3. Verify authentication tag (detect tampering)
4. Decrypt with correct key version
     ↓
Plain Text: "whsec_abc123"
```

## Key Rotation

Rotate encryption keys every 6-12 months for security best practices.

### Step 1: Generate New Key

```bash
bunx convex env set ENCRYPTION_SECRET_KEY_V2=$(openssl rand -base64 32)
```

### Step 2: Update Code

Edit `convex/lib/encryption.ts`:

```typescript
const CURRENT_KEY_ID = 'v2'; // Changed from 'v1'

const KEYS: Record<string, string> = {
  v1: process.env.ENCRYPTION_SECRET_KEY!,   // Old key (for decrypting old data)
  v2: process.env.ENCRYPTION_SECRET_KEY_V2!, // New key (for new encryptions)
};
```

### Step 3: Deploy

```bash
bunx convex deploy
```

✅ New encryptions use v2  
✅ Old data still decryptable with v1

### Step 4: Migrate Data (Optional)

**Option A: Check Status**

```bash
bunx convex run migrations/rotateEncryptionKeys:checkStatus
```

**Option B: Migrate All at Once**

```bash
bunx convex run migrations/rotateEncryptionKeys:rotateAll
```

**Option C: Migrate in Batches (Safer)**

```bash
bunx convex run migrations/rotateEncryptionKeys:rotateBatch '{"batchSize": 100}'
```

**Option D: Lazy Migration (Recommended)**

Add to your webhook handlers:

```typescript
import { needsRotation, encrypt, decrypt } from "./lib/encryption";

// In your webhook processing function
if (needsRotation(connection.webhookSecretEncrypted)) {
  const secret = decrypt(connection.webhookSecretEncrypted);
  const reencrypted = encrypt(secret);
  await ctx.db.patch(connection._id, {
    webhookSecretEncrypted: reencrypted
  });
}
```

### Step 5: Remove Old Key (After Migration Complete)

```bash
# Check if migration is done
bunx convex run migrations/rotateEncryptionKeys:checkStatus

# If 100% migrated, remove old key from code
# Then delete from environment
bunx convex env remove ENCRYPTION_SECRET_KEY
```

## Testing

Run comprehensive tests:

```bash
bun run scripts/test-encryption.ts
```

Tests include:
- ✅ Basic encryption/decryption
- ✅ Randomness (same input → different outputs)
- ✅ Tamper detection
- ✅ Error handling
- ✅ Unicode and special characters
- ✅ Performance benchmarks

## Security Properties

### Confidentiality
Only someone with the encryption key can read the data.

### Authenticity
GCM authentication tag ensures tampered data is detected and rejected.

### Uniqueness
Random IV ensures encrypting the same text twice produces different ciphertext.

### Non-repudiation
Key rotation allows determining when data was encrypted.

## API Reference

### `encrypt(text: string): string`

Encrypts plain text using the current encryption key.

**Parameters:**
- `text` - Plain text to encrypt

**Returns:**
- Base64-encoded encrypted data with embedded key version

**Example:**
```typescript
const encrypted = encrypt("sensitive_data");
// "AYAB...base64_encrypted_string..."
```

### `decrypt(data: string): string`

Decrypts data encrypted with `encrypt()`. Automatically detects and uses correct key version.

**Parameters:**
- `data` - Base64-encoded encrypted data

**Returns:**
- Original plain text

**Throws:**
- Error if data is tampered, corrupted, or key not found

**Example:**
```typescript
const plainText = decrypt(encrypted);
// "sensitive_data"
```

### `needsRotation(encryptedData: string): boolean`

Checks if encrypted data should be re-encrypted with current key.

**Parameters:**
- `encryptedData` - Base64-encoded encrypted data

**Returns:**
- `true` if data uses old key version

**Example:**
```typescript
if (needsRotation(data)) {
  const reencrypted = encrypt(decrypt(data));
  // Save reencrypted to database
}
```

## Best Practices

### ✅ DO

- Use for sensitive data (webhook secrets, API keys, passwords)
- Rotate keys every 6-12 months
- Store keys in environment variables (never in code)
- Use HTTPS for all API communications
- Log encryption/decryption events (without sensitive data)
- Test encryption before deploying to production

### ❌ DON'T

- Don't implement your own crypto algorithms
- Don't reuse keys across different environments (dev/prod)
- Don't log plain text secrets
- Don't store keys in version control
- Don't share keys via insecure channels (email, Slack)
- Don't skip key rotation indefinitely

## Troubleshooting

### "Encryption key 'v1' not found"

**Cause:** Environment variable not set  
**Solution:**
```bash
bunx convex env set ENCRYPTION_SECRET_KEY=$(openssl rand -base64 32)
```

### "Decryption failed"

**Causes:**
1. Data was tampered with
2. Wrong key version
3. Corrupted data in database

**Solution:** Check data integrity, verify correct key is set

### Performance Issues

**Symptoms:** Slow encryption/decryption  
**Solution:**
- Keys are decoded once at module load (already optimized)
- For bulk operations, use batch processing
- Consider caching decrypted secrets (with caution)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ENCRYPTION_SECRET_KEY` | Yes | Current encryption key (v1) |
| `ENCRYPTION_SECRET_KEY_V2` | No | New key during rotation (v2) |
| `ENCRYPTION_SECRET_KEY_V0` | No | Legacy key for old data (v0) |

## Migration Checklist

When rotating keys:

- [ ] Generate new key with `openssl rand -base64 32`
- [ ] Add to Convex environment
- [ ] Update `CURRENT_KEY_ID` in code
- [ ] Add new key to `KEYS` object
- [ ] Deploy changes
- [ ] Run migration (or enable lazy migration)
- [ ] Monitor migration progress
- [ ] Verify 100% migration complete
- [ ] Remove old key from code and environment
- [ ] Update documentation

## Support

For questions or issues:
1. Check this README
2. Review inline documentation in `encryption.ts`
3. Run test suite: `bun run scripts/test-encryption.ts`
4. Check Convex logs for error details
