const path = require("path");
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.js');

module.exports = merge(baseWebpackConfig , {
    mode: "development",
    devtool:'eval-cheap-module-source-map',
    devServer: {
      port: 9000,
    },
  })
