const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: "/",
    filename: "main.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
