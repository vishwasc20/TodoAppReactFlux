const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: "/public/",
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: "layouts"
  },
  plugins: [
    new extractTextPlugin({ // define where to save the file
      filename: './css/cssBundle.css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.(js|jsx|es6)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "less-loader" } // compiles Less to CSS
        ]
      }
    ]
  }
};
