const storageKey = "orion:last-quote-index";

export function getNextQuoteIndex(total: number): number {
  if (total <= 1 || typeof window === "undefined") {
    return 0;
  }

  try {
    const saved = window.localStorage.getItem(storageKey);
    const previousIndex = saved === null ? -1 : Number(saved);
    const safePreviousIndex = Number.isInteger(previousIndex) && previousIndex >= 0 && previousIndex < total ? previousIndex : -1;
    const nextIndex = (safePreviousIndex + 1) % total;
    window.localStorage.setItem(storageKey, String(nextIndex));
    return nextIndex;
  } catch {
    // 隐私模式禁用存储时继续展示默认句子。
    return 0;
  }
}
