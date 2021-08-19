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
        test: /\.[tj]s$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // optimization: {
  //   minimizer: [
  //     (compiler) => {
  //       const TerserPlugin = require('terser-webpack-plugin');
  //       new TerserPlugin({
  //         extractComments: false,
  //         terserOptions: {
  //           keep_classnames: true,
  //         },
  //       }).apply(compiler);
  //     },
  //   ],
  // },
  plugins: [new GasPlugin()],
};
