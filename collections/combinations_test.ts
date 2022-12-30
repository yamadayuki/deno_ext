import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";
import { combinations } from "./combinations.ts";

function combinationsTest<T>(
  input: [Array<T>],
  expected: Array<Array<T>>,
  n: number = input[0].length,
) {
  const actual = combinations(...input, n);
  assertEquals(actual, expected);
}

Deno.test({
  name: "[collections/combinations] no mutation",
  fn() {
    const array = [1, 2, 3];
    combinations(array);

    assertEquals(array, [1, 2, 3]);
  },
});

Deno.test({
  name: "[collections/combinations] empty input",
  fn() {
    combinationsTest(
      [[]],
      [],
    );
  },
});

Deno.test({
  name: "[collections/combinations] one element",
  fn() {
    combinationsTest(
      [
        [true],
      ],
      [[true]],
    );
    combinationsTest(
      [
        [undefined],
      ],
      [[undefined]],
    );
  },
});

Deno.test({
  name: "[collections/combinations] equality is ignored",
  fn() {
    combinationsTest(
      [[1, 1]],
      [[1, 1]],
    );
  },
});

Deno.test({
  name: "[collections/combinations] n = 0",
  fn() {
    combinationsTest(
      [[1, 2, 3]],
      [],
      0,
    );
  },
});

Deno.test({
  name: "[collections/combinations] n = 1",
  fn() {
    combinationsTest(
      [[1, 2, 3]],
      [[1], [2], [3]],
      1,
    );
  },
});

Deno.test({
  name: "[collections/combinations] n = 2",
  fn() {
    combinationsTest(
      [[1, 2, 3]],
      [[1, 2], [1, 3], [2, 3]],
      2,
    );
  },
});

Deno.test({
  name: "[collections/combinations] n = 3",
  fn() {
    combinationsTest(
      [[1, 2, 3]],
      [[1, 2, 3]],
      3,
    );
  },
});

Deno.test({
  name: "[collections/combinations] n = 4",
  fn() {
    combinationsTest(
      [[1, 2, 3]],
      [],
      4,
    );
  },
});
