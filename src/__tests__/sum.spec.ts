import { describe, expect, it } from "vitest";
import { sumOfNumber } from "#utils/sum.js";

describe("It sums up 2 numbers.", () => {
  it("it should adds two numbers together correctly.", () => {
    expect(sumOfNumber(1, 2)).toBe(3);
  });
});
