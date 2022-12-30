import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { permutations } from "./permutation.ts";

function permutationsTest<T>(
  input: [Array<T>],
  expected: Array<Array<T>>,
  n: number = input[0].length,
) {
  const actual = permutations(...input, n);
  assertEquals(actual, expected);
}

Deno.test({
  name: "[collections/permutations] no mutation",
  fn() {
    const array = [1, 2, 3];
    permutations(array);

    assertEquals(array, [1, 2, 3]);
  },
});

Deno.test({
  name: "[collections/permutations] empty input",
  fn() {
    permutationsTest(
      [[]],
      [],
    );
  },
});

Deno.test({
  name: "[collections/permutations] one element",
  fn() {
    permutationsTest(
      [
        [true],
      ],
      [[true]],
    );
    permutationsTest(
      [
        [undefined],
      ],
      [[undefined]],
    );
  },
});

Deno.test({
  name: "[collections/permutations] equality is ignored",
  fn() {
    permutationsTest(
      [[1, 1]],
      [[1, 1], [1, 1]],
    );
  },
});

Deno.test({
  name: "[collections/permutations] examples",
  fn() {
    permutationsTest(
      [["a", "b", "c"]],
      [
        ["a", "b", "c"],
        ["a", "c", "b"],
        ["b", "a", "c"],
        ["b", "c", "a"],
        ["c", "a", "b"],
        ["c", "b", "a"],
      ],
    );
    permutationsTest(
      [[true, false, true]],
      [
        [true, false, true],
        [true, true, false],
        [false, true, true],
        [false, true, true],
        [true, true, false],
        [true, false, true],
      ],
    );
  },
});

Deno.test({
  name: "[collections/permutations] examples with n",
  fn() {
    permutationsTest(
      [[1, 2, 3]],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    );

    permutationsTest(
      [[1, 2, 3]],
      [
        [1],
        [2],
        [3],
      ],
      1,
    );

    permutationsTest(
      [[1, 2, 3]],
      [
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 3],
        [3, 1],
        [3, 2],
      ],
      2,
    );

    permutationsTest(
      [[1, 2, 3]],
      [],
      4,
    );
  },
});
