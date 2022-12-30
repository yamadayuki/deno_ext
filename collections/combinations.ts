/**
 * Builds a list of all possible combinations of the given list of items.
 * If n is provided, only combinations of length n are returned.
 * n must be less than or equal to the length of the input array.
 */
export function combinations<T>(
  inputArray: readonly T[],
  n: number = inputArray.length,
): T[][] {
  const ret: T[][] = [];
  const k = inputArray.length;

  // If n is greater than the length of the input array, there are no combinations
  // If n is 0, there are no combinations
  // If n is negative, there are no combinations
  if (k === 0 || n <= 0 || n > k) {
    return ret;
  }

  if (n === k) {
    ret.push(inputArray.slice());
  } else if (n === 1) {
    for (const v of inputArray) {
      ret.push([v]);
    }
  } else {
    for (let i = 0; i < k; i++) {
      const v = inputArray[i];
      const rest = inputArray.slice(i + 1);
      const restCombinations = combinations(rest, n - 1);

      for (const c of restCombinations) {
        ret.push([v, ...c]);
      }
    }
  }

  return ret;
}
