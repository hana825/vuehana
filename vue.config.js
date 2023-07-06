// const { defineConfig } = require("@vue/cli-service");

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: "./",
//   // publicPath: process.env.NODE_ENV === "production" ? "/vuehana/" : "/",
//   chainWebpack: (config) => {
//     config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();
//   },
// });

const Dotenv = require("dotenv-webpack");
const { ProvidePlugin } = require("webpack");

module.exports = {
  transpileDependencies: true,
  publicPath: "./",
  chainWebpack: (config) => {
    config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();
  },
  configureWebpack: {
    plugins: [
      new Dotenv(),
      new ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
        stream: require.resolve("stream-browserify"),
      }),
    ],
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },
};
