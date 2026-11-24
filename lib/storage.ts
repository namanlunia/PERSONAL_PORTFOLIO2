export function getNumberItem(key: string, fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = window.localStorage.getItem(key);
    if (!item) return fallback;
    const parsed = parseInt(item, 10);
    return isNaN(parsed) ? fallback : parsed;
  } catch {
    return fallback;
  }
}

export function setNumberItem(key: string, value: number): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, String(value));
  } catch {
    // Local storage access might be restricted
  }
}

export function getStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Local storage access might be restricted
  }
}
