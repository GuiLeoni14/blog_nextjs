import GlobalStyles from '../src/styles/global'
import { addDecorator } from "@storybook/react";
import { BlogThemeProvider } from '../src/context/BlogThemeContext';
export const decorators = [
    (Story) => (
      <BlogThemeProvider>
        <Story />
        <GlobalStyles />
      </BlogThemeProvider>
    )
  ];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}