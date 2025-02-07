import { mergeConfig } from "vite";
import { loadConfigFromFile } from "vite";
import * as path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (storybookConfig) => {
    const viteConfig = await loadConfigFromFile(
        { mode: "development", command: "serve" },
        path.resolve(__dirname, "../../vite.config.ts")
    );

    return mergeConfig(storybookConfig, viteConfig?.config || {});
  },
};

export default config;
