const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');
const path = require("path");

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new EncodingPlugin({
      encodig: 'UTF-8'
    })
  ],
};
