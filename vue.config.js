const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === "production" ? "/vuehana/" : "/",
  chainWebpack: (config) => {
    config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();
  },
});
