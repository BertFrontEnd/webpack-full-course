const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  /* context: path.resolve(__dirname, 'src'), */
  mode: 'development',
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js',
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  /*   resolve: {
    extensions: ['.js', '.json', '.png', '.xml', '.csv'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  }, */

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  /* devtool: 'inline-source-map', */

  devServer: {
    port: 3000,
  },

  plugins: [
    new HTMLWebpackPlugin({
      /* title: 'Webpack BertFrontEnd', */
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
};
