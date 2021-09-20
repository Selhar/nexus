module.exports = {
  stories: [
    "../components/**/story.mdx",
    "../components/**/story.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
