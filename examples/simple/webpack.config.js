const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, './src');
const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: {
    index: SRC_PATH + '/index.ts',
  },
  output: {
    path: DIST_PATH,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new GasPlugin()],
};
