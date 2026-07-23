import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const vitestConfig = defineConfig({
  test: {
    browser: {
      enabled: true,
      instances: [{ browser: "chromium" }],
      provider: playwright(),
    },
  },
});

export default vitestConfig;
