'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'createjs.js',
    library: 'createjs',
    libraryTarger: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: require.resolve('./vendor/tweenjs.js'),
        loader: 'imports?createjs=>{}!exports?createjs'
      },
      {
        test: require.resolve('./vendor/easeljs.js'),
        loader: 'imports?createjs=tweenjs!exports?createjs'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['vendor']
  }
};
