const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|ico|gif|eot|woff|otf|ttf)$/,
        use: "file-loader?name=[path][name].[ext]"
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
