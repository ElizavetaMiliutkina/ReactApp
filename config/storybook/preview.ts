import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/RouterDecorator';
import '../../src/styles/index.scss';
import { Theme } from '../../src/shared/theme/ThemeContext'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => ThemeDecorator(Story, Theme.LIGHT),
    (Story) => RouterDecorator(Story)
  ],
};

export default preview;
