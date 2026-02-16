interface TTLEntry<T> {
  value: T;
  expiresAt: number;
}

export class TTLCache<K, T> {
  private cache = new Map<K, TTLEntry<T>>();
  private cleanupInterval: Timer | null = null;
  private maxSize: number;

  constructor(maxSize: number = 1000) {
    this.maxSize = maxSize;
  }

  /**
   * Sets a value in the cache with a specific TTL.
   * @param key The cache key.
   * @param value The value to store.
   * @param ttlMs Time to live in milliseconds.
   */
  set(key: K, value: T, ttlMs: number): void {
    // Simple size limit: remove random entry if at capacity
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      this.evictRandom();
    }

    const expiresAt = Date.now() + ttlMs;
    this.cache.set(key, { value, expiresAt });
  }

  /**
   * Retrieves a value from the cache, checking for expiration.
   * @param key The cache key.
   * @returns The value if not expired, otherwise undefined.
   */
  get(key: K): T | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      return undefined;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key); // Remove expired entry
      return undefined;
    }

    return entry.value;
  }

  /**
   * Checks if a key exists and is not expired.
   * @param key The cache key.
   * @returns True if the key exists and is not expired.
   */
  has(key: K): boolean {
    const entry = this.cache.get(key);
    if (!entry) {
      return false;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Removes an entry from the cache.
   */
  remove(key: K): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clears the entire cache.
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Returns the number of entries in the cache (including potentially expired ones).
   */
  get size(): number {
    return this.cache.size;
  }

  /**
   * Starts periodic cleanup of expired entries to prevent memory leaks.
   * @param intervalMs Interval in milliseconds between cleanup runs.
   */
  startCleanup(intervalMs: number): void {
    if (this.cleanupInterval) {
      return; // Already running
    }

    this.cleanupInterval = setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.cache) {
        if (now > entry.expiresAt) {
          this.cache.delete(key);
        }
      }
    }, intervalMs);
  }

  /**
   * Stops the periodic cleanup.
   */
  stopCleanup(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }

  /**
   * Manually triggers cleanup of all expired entries.
   * @returns Number of entries removed.
   */
  cleanup(): number {
    const now = Date.now();
    let removed = 0;
    for (const [key, entry] of this.cache) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
        removed++;
      }
    }
    return removed;
  }

  /**
   * Evict a random entry (simple eviction strategy)
   */
  private evictRandom(): void {
    if (this.cache.size === 0) return;

    // Get first key from iterator (fastest way)
    const firstKey = this.cache.keys().next().value;
    if (firstKey !== undefined) {
      this.cache.delete(firstKey);
    }
  }
}