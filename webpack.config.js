const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isDevelopment = true;

module.exports = {
  devtool: 'eval-source-map',
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 2000000,
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: !isDevelopment,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve('./index.html'),
      favicon: path.resolve('./favicon.png'),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
          to: 'css',
        },
      ],
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.gif',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
    ],
  },
};
