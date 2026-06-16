const storageKey = "orion:last-quote-index";

export function getNextQuoteIndex(total: number): number {
  if (total <= 1 || typeof window === "undefined") {
    return 0;
  }

  const previousIndex = Number(window.localStorage.getItem(storageKey));
  const safePreviousIndex = Number.isInteger(previousIndex) ? previousIndex : -1;
  const nextIndex = (safePreviousIndex + 1) % total;

  window.localStorage.setItem(storageKey, String(nextIndex));

  return nextIndex;
}
