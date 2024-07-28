import { expect, test } from "vitest";
import { getMaxAdditionalDinersCount } from "./Cafeteria";

test("Test Case 1: Expected Return Value = 3", () => {
  const N = 10;
  const K = 1;
  const M = 2;
  const S = [2, 6];

  expect(getMaxAdditionalDinersCount(N, K, M, S)).toBe(3);
});

test("Test Case 2: Expected Return Value = 1", () => {
  const N = 15;
  const K = 2;
  const M = 3;
  const S = [11, 6, 14];

  expect(getMaxAdditionalDinersCount(N, K, M, S)).toBe(1);
});
