const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8585,
    overlay: false,
    publicPath: '/'
  }
});
