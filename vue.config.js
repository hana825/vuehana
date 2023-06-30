const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  chainWebpack: (config) => {
    config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();
  },
});
