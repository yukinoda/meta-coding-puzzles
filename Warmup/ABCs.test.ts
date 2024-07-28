import { expect, test } from "vitest";
import { getSum } from "./ABCs";

test("Test Case 1: Expected Return Value = 6", () => {
  const A = 1;
  const B = 2;
  const C = 3;
  expect(getSum(A, B, C)).toBe(6);
});

test("Test Case 2: Expected Return Value = 300", () => {
  const A = 100;
  const B = 100;
  const C = 100;
  expect(getSum(A, B, C)).toBe(300);
});

test("Test Case 3: Expected Return Value = 194", () => {
  const A = 85;
  const B = 16;
  const C = 93;
  expect(getSum(A, B, C)).toBe(194);
});
