/**
 * Builds a list of all possible permutations of the given list, with repetitions.
 * If n is provided, only permutations of length n are returned.
 * n must be less than or equal to the length of the input array.
 * n defaults to the length of the input array.
 */
export function repeatedPermutations<T>(
  inputArray: readonly T[],
  n: number = inputArray.length,
): T[][] {
  const ret: T[][] = [];
  const k = inputArray.length;

  // If the length of the input array is 0, there are no permutations
  // If n is 0, there are no permutations
  // If n is negative, there are no permutations
  if (k === 0 || n <= 0) {
    return ret;
  }

  if (n === 1) {
    for (const v of inputArray) {
      ret.push([v]);
    }
  } else {
    for (let i = 0; i < k; i++) {
      const v = inputArray[i];
      const restPermutations = repeatedPermutations(inputArray, n - 1);

      for (const p of restPermutations) {
        ret.push([v, ...p]);
      }
    }
  }

  return ret;
}
