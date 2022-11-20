const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: isDev ? 'development' : 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: ` .${isDev ? 'js' : 'min.js'}`,
    library: 'mortal',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  resolve: {
    mainFiles: ["index"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  }
};

Object.assign(config, isDev ? {
  plugins: [
    new CleanWebpackPlugin(),
  ],
} : {});

module.exports = config;
