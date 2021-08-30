const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "src", "js", "basics", "index.js")],
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          } 
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', "index.html")
  })],
}