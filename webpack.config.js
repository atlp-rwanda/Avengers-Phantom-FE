const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts
  entry: './src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
    historyApiFallback: true
  }
};
