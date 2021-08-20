type Predicate<T> = (item: T) => boolean;

// 5.4.5 (1)
export function first<T>(items: T[], pred: Predicate<T>): T | undefined {
  for (const item of items) {
    if (pred(item)) {
      return item;
    }
  }

  return undefined;
}

// 5.4.5 (2)
export function all<T>(items: T[], pred: Predicate<T>): boolean {
  for (const item of items) {
    if (!pred(item)) {
      return false;
    }
  }

  return true;
}

