module.exports = {
  "stories": [
    "../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/organizmes/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/views/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}