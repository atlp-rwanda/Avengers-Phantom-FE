const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

dotenv.config();

module.exports = {
  //This property defines where the application starts
  // entry: "./src/index.js",
  entry: ["babel-polyfill", "./src/index.js"],

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        PORT: JSON.stringify(process.env.PORT),
        BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
        DRIVER_ROLE: JSON.stringify(process.env.DRIVER_ROLE),
        OPERATOR_ROLE: JSON.stringify(process.env.OPERATOR_ROLE),
        ADMIN_ROLE: JSON.stringify(process.env.ADMIN_ROLE),
        UPLOAD_PRESET: JSON.stringify(process.env.UPLOAD_PRESET)
      },
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
  },
};
