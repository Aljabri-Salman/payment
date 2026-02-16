// ----------------------------------------------------------------------
// Custom error
// ----------------------------------------------------------------------
class EncryptionError extends Error {
  constructor(message: string, public operation: "encrypt" | "decrypt") {
    super(message);
    this.name = "EncryptionError";
  }
}

function encryptionError(
  message: string,
  operation: "encrypt" | "decrypt"
): EncryptionError {
  return new EncryptionError(message, operation);
}

// ----------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------
const CURRENT_KEY_ID = "v1";
const IV_LENGTH = 12;
const AUTH_TAG_LENGTH = 16;
const MAX_KEY_ID_LENGTH = 50;
const KEY_BYTE_LENGTH = 32;

// ----------------------------------------------------------------------
// Base64 <-> Uint8Array
// ----------------------------------------------------------------------
function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

// ----------------------------------------------------------------------
// Guarantee a plain, non‑shared ArrayBuffer
// ----------------------------------------------------------------------
function toPlainArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.slice().buffer; // .slice() returns Uint8Array<ArrayBuffer>
}

// ----------------------------------------------------------------------
// Key cache
// ----------------------------------------------------------------------
const CRYPTO_KEYS = new Map<string, Promise<CryptoKey>>();

async function getCryptoKey(keyId: string): Promise<CryptoKey> {
  if (!CRYPTO_KEYS.has(keyId)) {
    const promise = (async () => {
      const envVar =
        keyId === "v1"
          ? "ENCRYPTION_SECRET_KEY"
          : `ENCRYPTION_SECRET_KEY_${keyId.toUpperCase()}`;

      const keyBase64 = process.env[envVar];
      if (!keyBase64) throw new Error("Missing encryption key");

      const keyBytes = base64ToBytes(keyBase64);
      if (keyBytes.length !== KEY_BYTE_LENGTH) throw new Error("Invalid key length");

      // Critical: convert to plain ArrayBuffer
      const keyBuffer = toPlainArrayBuffer(keyBytes);

      return crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"]
      );
    })().catch(() => {
      CRYPTO_KEYS.delete(keyId);
      throw encryptionError("Encryption initialization failed", "encrypt");
    });

    CRYPTO_KEYS.set(keyId, promise);
  }
  return CRYPTO_KEYS.get(keyId)!;
}

// ----------------------------------------------------------------------
// Public API
// ----------------------------------------------------------------------

export async function encrypt(text: string): Promise<string> {
  if (typeof text !== "string") {
    throw encryptionError("Encryption failed", "encrypt");
  }

  try {
    // 1. IV – already a plain ArrayBuffer Uint8Array in most runtimes,
    //    but we convert it anyway for absolute safety.
    const ivRaw = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
    const iv = new Uint8Array(toPlainArrayBuffer(ivRaw));

    // 2. Plaintext – must be converted, as TextEncoder may return SharedArrayBuffer‑backed Uint8Array
    const plaintextRaw = new TextEncoder().encode(text);
    const plaintext = new Uint8Array(toPlainArrayBuffer(plaintextRaw));

    const cryptoKey = await getCryptoKey(CURRENT_KEY_ID);

    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv, tagLength: 128 },
      cryptoKey,
      plaintext // ✅ now guaranteed Uint8Array<ArrayBuffer>
    );

    const encrypted = new Uint8Array(encryptedBuffer);
    const keyIdBytes = new TextEncoder().encode(CURRENT_KEY_ID);
    const keyIdLength = keyIdBytes.length;

    const result = new Uint8Array(1 + keyIdLength + IV_LENGTH + encrypted.length);
    let offset = 0;
    result[offset++] = keyIdLength;
    result.set(keyIdBytes, offset);
    offset += keyIdLength;
    result.set(iv, offset);
    offset += IV_LENGTH;
    result.set(encrypted, offset);

    return bytesToBase64(result);
  } catch {
    throw encryptionError("Encryption failed", "encrypt");
  }
}

export async function decrypt(data: string): Promise<string> {
  if (!data) {
    throw encryptionError("Decryption failed", "decrypt");
  }

  try {
    const buffer = base64ToBytes(data);
    const MIN_LENGTH = 1 + 1 + IV_LENGTH + AUTH_TAG_LENGTH;
    if (buffer.length < MIN_LENGTH) throw new Error();

    const keyIdLength = buffer[0];
    if (keyIdLength === 0 || keyIdLength > MAX_KEY_ID_LENGTH) throw new Error();
    if (buffer.length < 1 + keyIdLength + IV_LENGTH + AUTH_TAG_LENGTH) throw new Error();

    const keyId = new TextDecoder().decode(buffer.subarray(1, 1 + keyIdLength));
    const offset = 1 + keyIdLength;
    const ivRaw = buffer.subarray(offset, offset + IV_LENGTH);
    const ciphertextWithTag = buffer.subarray(offset + IV_LENGTH);

    const cryptoKey = await getCryptoKey(keyId);
    // Convert iv and ciphertext to plain ArrayBuffer (WebCrypto requirement)
    const iv = new Uint8Array(toPlainArrayBuffer(ivRaw));
    const ciphertextBuffer = toPlainArrayBuffer(ciphertextWithTag);

    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv, tagLength: 128 },
      cryptoKey,
      ciphertextBuffer
    );

    return new TextDecoder().decode(decryptedBuffer);
  } catch {
    throw encryptionError("Decryption failed", "decrypt");
  }
}

export async function rotateIfNeeded(encryptedData: string): Promise<string> {
  try {
    const buffer = base64ToBytes(encryptedData);
    if (buffer.length < 2) return encryptedData;

    const keyIdLength = buffer[0];
    if (keyIdLength === 0 || keyIdLength > MAX_KEY_ID_LENGTH) return encryptedData;
    if (buffer.length < 1 + keyIdLength) return encryptedData;

    const keyId = new TextDecoder().decode(buffer.subarray(1, 1 + keyIdLength));
    if (keyId === CURRENT_KEY_ID) return encryptedData;

    const decrypted = await decrypt(encryptedData);
    return await encrypt(decrypted);
  } catch {
    return encryptedData;
  }
}

export function generateKey(): string {
  const key = crypto.getRandomValues(new Uint8Array(KEY_BYTE_LENGTH));
  return bytesToBase64(key);
}
