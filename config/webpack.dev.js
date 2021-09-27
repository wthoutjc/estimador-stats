const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",

  devServer: {
    port: 9498,
    contentBase: "./dist",
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
