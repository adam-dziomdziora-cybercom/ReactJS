const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: { contentBase: './build' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
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
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve('./index.html'),
      favicon: path.resolve('./favicon.png'),
    }),
    new CopyWebpackPlugin([
      {
        from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
        to: 'css',
        flatten: true,
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
