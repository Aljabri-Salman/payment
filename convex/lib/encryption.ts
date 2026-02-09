import { encryptionError, ErrorCodes } from "./errors";

const CURRENT_KEY_ID = 'v1';

/**
 * Get encryption key from environment variables with proper validation.
 */
const getEncryptionKey = (keyId: string): string => {
  const envVarName = `ENCRYPTION_SECRET_KEY${keyId !== 'v1' ? `_${keyId.toUpperCase()}` : ''}`;
  const key = process.env[envVarName];
  
  if (!key) {
    throw encryptionError(
      `Encryption key '${keyId}' not found in environment variable '${envVarName}'`,
      'decrypt'
    );
  }
  
  return key;
};

const KEYS: Record<string, string> = {
  v1: getEncryptionKey('v1'),
  // v2: getEncryptionKey('v2'),
};

const KEY_BUFFERS: Record<string, Uint8Array> = Object.fromEntries(
  Object.entries(KEYS)
    .filter(([_, key]) => key)
    .map(([id, key]) => {
      try {
        const binaryString = atob(key);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        if (bytes.length !== 32) {
          throw encryptionError(
            `Key '${id}' invalid length: ${bytes.length} bytes (need 32)`,
            'encrypt'
          );
        }
        
        return [id, bytes];
      } catch (error) {
        throw encryptionError(
          `Failed to decode key '${id}': ${error instanceof Error ? error.message : 'Invalid key format'}`,
          'encrypt'
        );
      }
    })
);

const CRYPTO_KEYS: Record<string, Promise<CryptoKey>> = {};

async function getCryptoKey(keyId: string): Promise<CryptoKey> {
  if (!CRYPTO_KEYS[keyId]) {
    const keyBytes = KEY_BUFFERS[keyId];
    if (!keyBytes) {
      throw encryptionError(`Encryption key '${keyId}' not found`, 'encrypt');
    }
    
    CRYPTO_KEYS[keyId] = crypto.subtle.importKey(
      'raw',
      keyBytes.buffer as ArrayBuffer,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    ).catch(err => {
      throw encryptionError(`Failed to import key '${keyId}': ${err.message}`, 'encrypt');
    });
  }
  return CRYPTO_KEYS[keyId];
}

export async function encrypt(text: string): Promise<string> {
  try {
    if (!text || typeof text !== 'string') {
      throw encryptionError('encrypt() requires a non-empty string', 'encrypt');
    }
    
    const iv = new Uint8Array(12);
    crypto.getRandomValues(iv);
    
    const cryptoKey = await getCryptoKey(CURRENT_KEY_ID);
    const encoder = new TextEncoder();
    const plaintext = encoder.encode(text);

    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv, tagLength: 128 },
      cryptoKey,
      plaintext
    ).catch(err => {
      throw encryptionError(`Encryption failed: ${err.message}`, 'encrypt');
    });
    
    const encrypted = new Uint8Array(encryptedBuffer);
    const keyIdBytes = encoder.encode(CURRENT_KEY_ID);
    const keyIdLength = new Uint8Array([keyIdBytes.length]);

    const result = new Uint8Array(
      keyIdLength.length + keyIdBytes.length + iv.length + encrypted.length
    );
    
    let offset = 0;
    result.set(keyIdLength, offset);
    offset += keyIdLength.length;
    result.set(keyIdBytes, offset);
    offset += keyIdBytes.length;
    result.set(iv, offset);
    offset += iv.length;
    result.set(encrypted, offset);

    const binaryString = String.fromCharCode(...result);
    return btoa(binaryString);
  } catch (error) {
    if (error instanceof Error && error.name === 'EncryptionError') {
      throw error;
    }
    throw encryptionError(
      `Encryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'encrypt'
    );
  }
}

export async function decrypt(data: string): Promise<string> {
  try {
    if (!data || typeof data !== 'string') {
      throw encryptionError('decrypt() requires a non-empty string', 'decrypt');
    }
    
    const binaryString = atob(data);
    const buffer = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      buffer[i] = binaryString.charCodeAt(i);
    }
    
    if (buffer.length < 30) {
      throw encryptionError('Invalid encrypted data: too short', 'decrypt');
    }
    
    const keyIdLength = buffer[0];
    
    if (keyIdLength === 0 || keyIdLength > 50) {
      throw encryptionError('Invalid encrypted data: malformed key ID', 'decrypt');
    }
    
    const decoder = new TextDecoder();
    const keyId = decoder.decode(buffer.subarray(1, 1 + keyIdLength));
    const offset = 1 + keyIdLength;
    
    const iv = buffer.subarray(offset, offset + 12);
    const encryptedWithTag = buffer.subarray(offset + 12);

    const cryptoKey = await getCryptoKey(keyId);

    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv, tagLength: 128 },
      cryptoKey,
      encryptedWithTag
    ).catch(err => {
      if (err.message?.includes('Unsupported state or unable to authenticate data')) {
        throw encryptionError('Decryption failed: invalid key or corrupted data', 'decrypt');
      }
      throw encryptionError(`Decryption failed: ${err.message}`, 'decrypt');
    });

    return decoder.decode(decryptedBuffer);
  } catch (error) {
    if (error instanceof Error && error.name === 'EncryptionError') {
      throw error;
    }
    throw encryptionError(
      `Decryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'decrypt'
    );
  }
}

export function needsRotation(encryptedData: string): boolean {
  try {
    const binaryString = atob(encryptedData);
    const buffer = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      buffer[i] = binaryString.charCodeAt(i);
    }
    
    const keyIdLength = buffer[0];
    const decoder = new TextDecoder();
    const keyId = decoder.decode(buffer.subarray(1, 1 + keyIdLength));
    return keyId !== CURRENT_KEY_ID;
  } catch {
    return false;
  }
}