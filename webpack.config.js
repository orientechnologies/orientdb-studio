const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require('path');
var babelPresets = ["es2015"];


module.exports = {
  entry: "./src/app.js",
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      _: "underscore",
      S: "string",
      "window.CodeMirror": "codemirror",
      CodeMirror : "codemirror"

    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?" + babelPresets.map((preset) => `presets[]=${preset}`).join("&")]
      },
      {
        test: /.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpg|svg|gif|png|json)$/,
        loader: "file-loader"
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html'
      }
      //{
      //  test: /.html$/,
      //  loader: 'ngtemplate?relativeTo=' + __dirname +'/app!html?root=' + __dirname + '/src'
      //}

    ]
  },
  devtool: "source-map",
  debug: true,
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:2480',
        rewrite: function (req) {
          req.url = req.url.replace(/^\/api/, '');
        }
      }
    }
  }
};
