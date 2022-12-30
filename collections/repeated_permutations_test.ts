import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { repeatedPermutations } from "./repeated_permutations.ts";

function repeatedPermutationsTest<T>(
  input: [Array<T>],
  expected: Array<Array<T>>,
  n: number = input[0].length,
) {
  const actual = repeatedPermutations(...input, n);
  assertEquals(actual, expected);
}

Deno.test({
  name: "[collections/repeatedPermutations] no mutation",
  fn() {
    const array = [1, 2, 3];
    repeatedPermutations(array);

    assertEquals(array, [1, 2, 3]);
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] empty input",
  fn() {
    repeatedPermutationsTest(
      [[]],
      [],
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] one element",
  fn() {
    repeatedPermutationsTest(
      [
        [true],
      ],
      [[true]],
    );
    repeatedPermutationsTest(
      [
        [undefined],
      ],
      [[undefined]],
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] equality is ignored",
  fn() {
    repeatedPermutationsTest(
      [[1, 1]],
      [[1, 1], [1, 1], [1, 1], [1, 1]],
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] n = 1",
  fn() {
    repeatedPermutationsTest(
      [
        [1, 2, 3],
      ],
      [[1], [2], [3]],
      1,
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] n = 2",
  fn() {
    repeatedPermutationsTest(
      [
        [1, 2, 3],
      ],
      [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 1],
        [3, 2],
        [3, 3],
      ],
      2,
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] n = 3",
  fn() {
    repeatedPermutationsTest(
      [
        [1, 2, 3],
      ],
      [
        [1, 1, 1],
        [1, 1, 2],
        [1, 1, 3],
        [1, 2, 1],
        [1, 2, 2],
        [1, 2, 3],
        [1, 3, 1],
        [1, 3, 2],
        [1, 3, 3],
        [2, 1, 1],
        [2, 1, 2],
        [2, 1, 3],
        [2, 2, 1],
        [2, 2, 2],
        [2, 2, 3],
        [2, 3, 1],
        [2, 3, 2],
        [2, 3, 3],
        [3, 1, 1],
        [3, 1, 2],
        [3, 1, 3],
        [3, 2, 1],
        [3, 2, 2],
        [3, 2, 3],
        [3, 3, 1],
        [3, 3, 2],
        [3, 3, 3],
      ],
      3,
    );
  },
});

Deno.test({
  name: "[collections/repeatedPermutations] n = 4",
  fn() {
    repeatedPermutationsTest(
      [
        [1, 2, 3],
      ],
      [
        [1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 1, 3],
        [1, 1, 2, 1],
        [1, 1, 2, 2],
        [1, 1, 2, 3],
        [1, 1, 3, 1],
        [1, 1, 3, 2],
        [1, 1, 3, 3],
        [1, 2, 1, 1],
        [1, 2, 1, 2],
        [1, 2, 1, 3],
        [1, 2, 2, 1],
        [1, 2, 2, 2],
        [1, 2, 2, 3],
        [1, 2, 3, 1],
        [1, 2, 3, 2],
        [1, 2, 3, 3],
        [1, 3, 1, 1],
        [1, 3, 1, 2],
        [1, 3, 1, 3],
        [1, 3, 2, 1],
        [1, 3, 2, 2],
        [1, 3, 2, 3],
        [1, 3, 3, 1],
        [1, 3, 3, 2],
        [1, 3, 3, 3],
        [2, 1, 1, 1],
        [2, 1, 1, 2],
        [2, 1, 1, 3],
        [2, 1, 2, 1],
        [2, 1, 2, 2],
        [2, 1, 2, 3],
        [2, 1, 3, 1],
        [2, 1, 3, 2],
        [2, 1, 3, 3],
        [2, 2, 1, 1],
        [2, 2, 1, 2],
        [2, 2, 1, 3],
        [2, 2, 2, 1],
        [2, 2, 2, 2],
        [2, 2, 2, 3],
        [2, 2, 3, 1],
        [2, 2, 3, 2],
        [2, 2, 3, 3],
        [2, 3, 1, 1],
        [2, 3, 1, 2],
        [2, 3, 1, 3],
        [2, 3, 2, 1],
        [2, 3, 2, 2],
        [2, 3, 2, 3],
        [2, 3, 3, 1],
        [2, 3, 3, 2],
        [2, 3, 3, 3],
        [3, 1, 1, 1],
        [3, 1, 1, 2],
        [3, 1, 1, 3],
        [3, 1, 2, 1],
        [3, 1, 2, 2],
        [3, 1, 2, 3],
        [3, 1, 3, 1],
        [3, 1, 3, 2],
        [3, 1, 3, 3],
        [3, 2, 1, 1],
        [3, 2, 1, 2],
        [3, 2, 1, 3],
        [3, 2, 2, 1],
        [3, 2, 2, 2],
        [3, 2, 2, 3],
        [3, 2, 3, 1],
        [3, 2, 3, 2],
        [3, 2, 3, 3],
        [3, 3, 1, 1],
        [3, 3, 1, 2],
        [3, 3, 1, 3],
        [3, 3, 2, 1],
        [3, 3, 2, 2],
        [3, 3, 2, 3],
        [3, 3, 3, 1],
        [3, 3, 3, 2],
        [3, 3, 3, 3],
      ],
      4,
    );
  },
});
