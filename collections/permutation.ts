/**
 * Builds all possible orders of all elements in the given array
 * Ignores equality of elements, meaning this will always return the same
 * number of permutations for a given length of input.
 * If n is provided, only permutations of length n are returned.
 * n must be less than or equal to the length of the input array.
 * n defaults to the length of the input array.
 */
export function permutations<T>(
  inputArray: readonly T[],
  n: number = inputArray.length,
): T[][] {
  const ret: T[][] = [];
  const k = inputArray.length;

  // If n is greater than the length of the input array, there are no permutations
  // If n is 0, there are no permutations
  // If n is negative, there are no permutations
  if (k === 0 || n <= 0 || n > k) {
    return ret;
  }

  if (n === 1) {
    for (const v of inputArray) {
      ret.push([v]);
    }
  } else {
    for (let i = 0; i < k; i++) {
      const v = inputArray[i];
      const rest = inputArray.slice(0, i).concat(inputArray.slice(i + 1));
      const restPermutations = permutations(rest, n - 1);

      for (const p of restPermutations) {
        ret.push([v, ...p]);
      }
    }
  }

  return ret;
}
