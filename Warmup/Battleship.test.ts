import { expect, test } from "vitest";
import { getHitProbability } from "./Battleship";

test("Test Case 1: Expected Return Value = 0.5", () => {
  const R = 2;
  const C = 3;
  const G = [
    [0, 0, 1],
    [1, 0, 1],
  ];
  expect(getHitProbability(R, C, G)).toBe(0.5);
});

test("Test Case 2: Expected Return Value = 1.0", () => {
  const R = 2;
  const C = 2;
  const G = [
    [1, 1],
    [1, 1],
  ];
  expect(getHitProbability(R, C, G)).toBe(1.0);
});
