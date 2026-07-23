/// <reference types="user-agent-data-types" />

import { describe, expect, test } from "vitest";
import { add } from "./index.js";

describe("add", () => {
  test("adds two numbers correctly", () => {
    expect(add(1, 1)).toBe(2);
    expect(add(-1, -1)).toBe(-2);
  });
  test("isChromium", () => {
    expect(
      !!navigator.userAgentData &&
        navigator.userAgentData.brands.some((data) => data.brand == "Chromium"),
    ).toBe(true);
  });
});
