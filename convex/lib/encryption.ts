const CURRENT_KEY_ID = 'v1';

const KEYS: Record<string, string> = {
  v1: process.env.ENCRYPTION_SECRET_KEY!,
  // v2: process.env.ENCRYPTION_SECRET_KEY_V2!,
};

if (!KEYS[CURRENT_KEY_ID]) {
  throw new Error(`Encryption key '${CURRENT_KEY_ID}' not found`);
}
const KEY_BUFFERS: Record<string, Uint8Array> = Object.fromEntries(
  Object.entries(KEYS)
    .filter(([_, key]) => key)
    .map(([id, key]) => {
      const binaryString = atob(key);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      if (bytes.length !== 32) {
        throw new Error(`Key '${id}' invalid length: ${bytes.length} bytes (need 32)`);
      }
      
      return [id, bytes];
    })
);

const CRYPTO_KEYS: Record<string, Promise<CryptoKey>> = {};

async function getCryptoKey(keyId: string): Promise<CryptoKey> {
  if (!CRYPTO_KEYS[keyId]) {
    const keyBytes = KEY_BUFFERS[keyId];
    CRYPTO_KEYS[keyId] = crypto.subtle.importKey(
      'raw',
      keyBytes.buffer as ArrayBuffer,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    );
  }
  return CRYPTO_KEYS[keyId];
}

export async function encrypt(text: string): Promise<string> {
  if (!text || typeof text !== 'string') {
    throw new Error('encrypt() requires a non-empty string');
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
  );
  
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
}

export async function decrypt(data: string): Promise<string> {
  try {
    if (!data || typeof data !== 'string') {
      throw new Error('decrypt() requires a non-empty string');
    }
    
    const binaryString = atob(data);
    const buffer = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      buffer[i] = binaryString.charCodeAt(i);
    }
    
    if (buffer.length < 30) {
      throw new Error('Invalid encrypted data: too short');
    }
    
    const keyIdLength = buffer[0];
    
    if (keyIdLength === 0 || keyIdLength > 50) {
      throw new Error('Invalid encrypted data: malformed key ID');
    }
    
    const decoder = new TextDecoder();
    const keyId = decoder.decode(buffer.subarray(1, 1 + keyIdLength));
    const offset = 1 + keyIdLength;
    
    const iv = buffer.subarray(offset, offset + 12);
    const encryptedWithTag = buffer.subarray(offset + 12);

    const cryptoKey = await getCryptoKey(keyId);
    if (!cryptoKey) {
      throw new Error(`Encryption key '${keyId}' not found`);
    }

    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv, tagLength: 128 },
      cryptoKey,
      encryptedWithTag
    );

    return decoder.decode(decryptedBuffer);
  } catch (error: any) {
    if (error.message?.includes('Unsupported state or unable to authenticate data')) {
      throw new Error('Decryption failed: invalid key or corrupted data');
    }
    throw new Error(`Decryption failed: ${error.message || 'unknown error'}`);
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
