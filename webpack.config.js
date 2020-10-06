const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ruleTypeScript = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

const ruleStyles = {
  test: /\.scss$/,
  use: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
  ],
}

const devServer = {
  contentBase: './dist',
  port: 4000,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  clientLogLevel: 'none',
}

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer,
  module: {
    rules: [ ruleTypeScript, ruleStyles ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};