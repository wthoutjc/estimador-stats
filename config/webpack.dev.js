const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",

  devServer: {
    port: 9498,
    contentBase: "./dist",
    open: 'chrome',
  },
};

module.exports = merge(common, devConfig);
