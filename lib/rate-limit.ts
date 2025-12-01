const buckets = new Map<string, { tokens: number; ts: number }>();

export function rateLimit(id: string, limit: number, windowMs: number) {
  const now = Date.now();
  const b = buckets.get(id) ?? { tokens: limit, ts: now };
  const elapsed = now - b.ts;
  const refill = Math.floor(elapsed / windowMs);
  if (refill > 0) {
    b.tokens = Math.min(limit, b.tokens + refill);
    b.ts = now;
  }
  if (b.tokens <= 0) return false;
  b.tokens -= 1;
  buckets.set(id, b);
  return true;
}
