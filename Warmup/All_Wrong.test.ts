import { expect, test } from "vitest";
import { getWrongAnswers } from "./All_Wrong";

test("Test Case 1: Expected Return Value = BAB", () => {
  const N = 3;
  const C = "ABA";
  expect(getWrongAnswers(N, C)).toBe("BAB");
});

test("Test Case 2: Expected Return Value = AAAAA", () => {
  const N = 5;
  const C = "BBBBB";
  expect(getWrongAnswers(N, C)).toBe("AAAAA");
});
