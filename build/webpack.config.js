const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevMode = process.env.NODE_ENV !== 'production';

// 多页打包，记录每个页面的 entry 和 htmlWebpackPlugin
const entries = {};
const htmlWebpackPlugins = [];

// 找到每个 html 文件
const pagePath = path.resolve(__dirname, '../src/pages');
const htmlPaths = glob.sync('**/*.html', {
  cwd: pagePath
});

htmlPaths.forEach((htmlPath) => {
  const filePath = path.join(pagePath, htmlPath);
  const entryKey = htmlPath.split('.')[0];

  const jsPath = filePath.replace(/\.html$/, '.js');
  entries[entryKey] = jsPath;
  htmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      filename: isDevMode ? htmlPath : '../' + htmlPath,
      template: filePath,
      chunks: [entryKey],
      inject: true
    })
  );
});

module.exports = {
  entry: entries,

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: 'commonjs'
              }]
            ],
            plugins: [
              // Stage 3
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-json-strings'
            ]
          }
        }
      },

      {
        test: /\.m?js$/,
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'eslint-loader'
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: htmlWebpackPlugins
};
