const path = require('path');

const SRC_PATH = path.resolve(__dirname, './src');
const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    index: SRC_PATH + '/index.ts',
  },
  output: {
    filename: '[name].js',
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.json'],
  },
};
