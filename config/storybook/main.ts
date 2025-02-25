import { mergeConfig } from "vite";
import { loadConfigFromFile } from "vite";
import * as path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [path.resolve(__dirname, "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)")],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true
  },
  viteFinal: async (storybookConfig) => {
    const viteConfig = await loadConfigFromFile(
        { mode: "production", command: "build" },
        path.resolve(__dirname, "../../vite.config.ts")
    );
    return mergeConfig(storybookConfig, viteConfig?.config || {});
  }
};

export default config;
