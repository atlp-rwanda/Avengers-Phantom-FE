const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //This property defines where the application starts
<<<<<<< HEAD
  entry: "./src/index.js",

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
<<<<<<< HEAD

=======
  // devServer: {
  //   static: path.resolve(__dirname, "./dist"),
  //   hot: true,
  //   historyApiFallback: true,
  // },
    
>>>>>>> 70780626 (ft signin rebase)
=======
  entry: './src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
>>>>>>> 07ad962e (ft signin rebase)
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
<<<<<<< HEAD
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
=======
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
>>>>>>> 07ad962e (ft signin rebase)
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
  },
=======
      template: './src/index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
    historyApiFallback: true
  }
>>>>>>> 07ad962e (ft signin rebase)
};
