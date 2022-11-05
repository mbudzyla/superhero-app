const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const componentsDirectories = ["atoms", "molecules", "organisms", "templates"];

module.exports = {
  "stories": componentsDirectories.map(dir => ({
    directory: `../src/components/${dir}`,
    titlePrefix: `Components/${dir}`,
    files: "**/*.stories.tsx",
  })),
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    "@storybook/addon-controls",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "staticDirs": ['../public'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin({})];
    config.resolve.extensions.push('.ts', '.tsx', '.d.ts');
    return config;
  }
}
